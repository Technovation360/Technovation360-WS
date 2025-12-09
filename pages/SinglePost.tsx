import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostBySlug, fetchPosts } from '../services/wordpress';
import { BlogPost } from '../types';
import { Calendar, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin, Share2, Search, Loader2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

const SinglePost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadData = async () => {
      setLoading(true);
      setError(false);
      if (slug) {
        const fetchedPost = await fetchPostBySlug(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError(true);
        }
      }
      
      const allPosts = await fetchPosts();
      setRecentPosts(allPosts);
      setLoading(false);
    };
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
         <Loader2 className="animate-spin text-brand-primary" size={48} />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto py-32 text-center">
         <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
         <Link to="/blog" className="text-brand-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const categories = Array.from(new Set(recentPosts.map(p => p.category)));

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <Reveal>
              <article className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                 {/* Post Meta Header */}
                 <div className="mb-8">
                   <Link to="/blog" className="inline-flex items-center gap-1 text-brand-primary font-medium text-sm mb-6 hover:underline">
                     <ArrowLeft size={16} /> Back to Insights
                   </Link>
                   <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="bg-blue-100 text-brand-primary px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={14}/> {post.author}</span>
                   </div>
                   <h1 className="text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight mb-8" dangerouslySetInnerHTML={{ __html: post.title }} />
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-80 md:h-96 object-cover rounded-xl mb-8 shadow-md"
                   />
                 </div>

                 {/* Post Content */}
                 <div 
                   className="prose prose-lg text-gray-700 max-w-none focus:outline-none"
                   dangerouslySetInnerHTML={{ __html: post.content }}
                 />

                 {/* Tags & Share */}
                 <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Tag size={18} className="text-brand-accent" />
                      <div className="flex gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm px-3 py-1 rounded transition-colors cursor-pointer">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 font-medium flex items-center gap-1"><Share2 size={16}/> Share:</span>
                      <button className="bg-blue-600 text-white p-2 rounded-full hover:opacity-80 transition-opacity"><Facebook size={16}/></button>
                      <button className="bg-sky-500 text-white p-2 rounded-full hover:opacity-80 transition-opacity"><Twitter size={16}/></button>
                      <button className="bg-blue-700 text-white p-2 rounded-full hover:opacity-80 transition-opacity"><Linkedin size={16}/></button>
                    </div>
                 </div>
              </article>
            </Reveal>

            {/* Author Box */}
            <Reveal delay={200}>
              <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
                 <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                   {post.author.charAt(0)}
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-brand-dark">About {post.author}</h4>
                   <p className="text-gray-600 text-sm mt-1">
                     Technology enthusiast and digital transformation expert dedicated to helping businesses modernize their operations.
                   </p>
                 </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1 space-y-8">
             {/* Search Widget */}
             <Reveal delay={100}>
               <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                 <h3 className="font-bold text-lg text-brand-dark mb-4 pb-2 border-b-2 border-brand-accent inline-block">Search</h3>
                 <div className="relative">
                   <input 
                     type="text" 
                     placeholder="Search..." 
                     className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                   />
                   <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
                 </div>
               </div>
             </Reveal>

             {/* Recent Posts */}
             <Reveal delay={200}>
               <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                 <h3 className="font-bold text-lg text-brand-dark mb-6 pb-2 border-b-2 border-brand-accent inline-block">Latest Insights</h3>
                 <div className="space-y-6">
                   {recentPosts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                     <div key={p.id} className="flex gap-4 group cursor-pointer">
                       <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                         <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                       </div>
                       <div>
                         <h4 className="font-bold text-brand-dark text-sm leading-tight mb-1 group-hover:text-brand-primary transition-colors">
                           <Link to={`/blog/${p.slug}`} dangerouslySetInnerHTML={{ __html: p.title }} />
                         </h4>
                         <span className="text-xs text-gray-400">{p.date}</span>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </Reveal>

             {/* Categories */}
             <Reveal delay={300}>
               <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                 <h3 className="font-bold text-lg text-brand-dark mb-4 pb-2 border-b-2 border-brand-accent inline-block">Categories</h3>
                 <ul className="space-y-3">
                   {categories.map((cat, idx) => (
                     <li key={idx}>
                       <Link to="/blog" className="flex items-center justify-between w-full text-gray-600 hover:text-brand-primary transition-colors border-b border-gray-50 pb-2">
                         <span>{cat}</span>
                         <span className="text-gray-400 text-xs">({recentPosts.filter(p => p.category === cat).length})</span>
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             </Reveal>

             {/* CTA Widget */}
             <Reveal delay={400}>
               <div className="sticky top-24">
                  <ContactForm />
               </div>
             </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePost;