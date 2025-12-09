import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../services/wordpress';
import { BlogPost } from '../types';
import { Search, Calendar, User, ArrowRight, Loader2 } from 'lucide-react';
import Reveal from '../components/Reveal';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-dark py-16 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="container mx-auto px-4 relative z-10">
           <Reveal>
             <h1 className="text-4xl font-extrabold mb-4">Insights & News</h1>
           </Reveal>
           <Reveal delay={200}>
             <p className="text-xl text-blue-200">Latest trends in Technology and Digital Transformation</p>
           </Reveal>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content: Post List */}
          <div className="lg:col-span-2 space-y-12">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-brand-primary" size={48} />
              </div>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post, idx) => (
                <Reveal key={post.id} delay={idx * 100}>
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wide shadow-md">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-brand-dark mb-4 hover:text-brand-primary transition-colors">
                        <Link to={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="inline-flex items-center gap-2 text-brand-accent font-bold hover:text-brand-dark transition-colors"
                      >
                        Read Article <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-400">No posts found matching your search.</h3>
              </div>
            )}
          </div>

          {/* Sidebar Widgets */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Search Widget */}
            <Reveal delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="font-bold text-lg text-brand-dark mb-4 pb-2 border-b-2 border-brand-accent inline-block">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  />
                  <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
                </div>
              </div>
            </Reveal>

            {/* Categories Widget */}
            <Reveal delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                 <h3 className="font-bold text-lg text-brand-dark mb-4 pb-2 border-b-2 border-brand-accent inline-block">Categories</h3>
                 <ul className="space-y-3">
                   {categories.map((cat, idx) => (
                     <li key={idx}>
                       <button 
                         onClick={() => setSearchTerm(cat)}
                         className="flex items-center justify-between w-full text-gray-600 hover:text-brand-primary transition-colors group"
                       >
                         <span>{cat}</span>
                         <span className="bg-gray-100 text-gray-400 text-xs px-2 py-1 rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                           {posts.filter(p => p.category === cat).length}
                         </span>
                       </button>
                     </li>
                   ))}
                 </ul>
              </div>
            </Reveal>

            {/* Recent Posts Widget */}
            <Reveal delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                 <h3 className="font-bold text-lg text-brand-dark mb-6 pb-2 border-b-2 border-brand-accent inline-block">Recent Posts</h3>
                 <div className="space-y-6">
                   {posts.slice(0, 3).map(post => (
                     <div key={post.id} className="flex gap-4 group cursor-pointer">
                       <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                         <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                       </div>
                       <div>
                         <h4 className="font-bold text-brand-dark text-sm leading-tight mb-1 group-hover:text-brand-primary transition-colors">
                           <Link to={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
                         </h4>
                         <span className="text-xs text-gray-400">{post.date}</span>
                       </div>
                     </div>
                   ))}
                 </div>
              </div>
            </Reveal>

            {/* Newsletter Widget */}
            <Reveal delay={400}>
              <div className="bg-brand-primary p-6 rounded-xl shadow-md text-white">
                <h3 className="font-bold text-lg mb-2">Subscribe to Insights</h3>
                <p className="text-blue-100 text-sm mb-4">Get the latest digital transformation tips directly to your inbox.</p>
                <input 
                   type="email" 
                   placeholder="Your email address" 
                   className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none mb-3"
                />
                <button className="w-full bg-brand-accent hover:bg-white hover:text-brand-accent text-white font-bold py-2 rounded transition-colors">
                  Subscribe
                </button>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;