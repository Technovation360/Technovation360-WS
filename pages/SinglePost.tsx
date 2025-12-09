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
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-brand-light">
         <Loader2 className="animate-spin text-brand-primary" size={48} />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container py-5 text-center mt-5">
         <h1 className="display-4 fw-bold text-dark mb-4">Article Not Found</h1>
         <Link to="/blog" className="text-brand-primary fw-bold text-decoration-none">Back to Blog</Link>
      </div>
    );
  }

  const categories = Array.from(new Set(recentPosts.map(p => p.category)));

  return (
    <div className="bg-brand-light min-vh-100">
      
      <div className="container py-5">
        <div className="row g-5">
          
          {/* Main Content Area */}
          <div className="col-lg-8">
            <Reveal>
              <article className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light mb-5">
                 {/* Post Meta Header */}
                 <div className="mb-5">
                   <Link to="/blog" className="d-inline-flex align-items-center gap-1 text-brand-primary fw-bold text-decoration-none small mb-4">
                     <ArrowLeft size={16} /> Back to Insights
                   </Link>
                   <div className="d-flex flex-wrap align-items-center gap-3 text-muted small mb-3">
                      <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 text-uppercase ls-1">
                        {post.category}
                      </span>
                      <span className="d-flex align-items-center gap-1"><Calendar size={14}/> {post.date}</span>
                      <span className="d-flex align-items-center gap-1"><User size={14}/> {post.author}</span>
                   </div>
                   <h1 className="display-5 fw-bold text-brand-dark mb-4" dangerouslySetInnerHTML={{ __html: post.title }} />
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-100 rounded-4 shadow-sm object-cover"
                     style={{ height: '400px' }}
                   />
                 </div>

                 {/* Post Content */}
                 <div 
                   className="post-content text-secondary fs-5 lh-base"
                   dangerouslySetInnerHTML={{ __html: post.content }}
                 />

                 {/* Tags & Share */}
                 <div className="mt-5 pt-4 border-top border-light d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
                    <div className="d-flex align-items-center gap-2">
                      <Tag size={18} className="text-brand-accent" />
                      <div className="d-flex gap-2">
                        {post.tags.map(tag => (
                          <span key={tag} className="badge bg-light text-secondary fw-normal px-2 py-1">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-muted fw-bold small d-flex align-items-center gap-1"><Share2 size={16}/> Share:</span>
                      <button className="btn btn-sm btn-primary rounded-circle p-2"><Facebook size={14}/></button>
                      <button className="btn btn-sm btn-info text-white rounded-circle p-2"><Twitter size={14}/></button>
                      <button className="btn btn-sm btn-primary rounded-circle p-2"><Linkedin size={14}/></button>
                    </div>
                 </div>
              </article>
            </Reveal>

            {/* Author Box */}
            <Reveal delay={200}>
              <div className="bg-white p-4 rounded-4 shadow-sm border border-light d-flex align-items-center gap-4">
                 <div className="flex-shrink-0 bg-brand-primary text-white rounded-circle d-flex align-items-center justify-content-center fs-4 fw-bold" style={{ width: '64px', height: '64px' }}>
                   {post.author.charAt(0)}
                 </div>
                 <div>
                   <h4 className="h5 fw-bold text-brand-dark mb-1">About {post.author}</h4>
                   <p className="text-secondary small mb-0">
                     Technology enthusiast and digital transformation expert dedicated to helping businesses modernize their operations.
                   </p>
                 </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar Area */}
          <div className="col-lg-4">
             <div className="d-flex flex-column gap-4">
                {/* Search Widget */}
                <Reveal delay={100}>
                <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
                    <h3 className="h5 fw-bold text-brand-dark mb-3 pb-2 border-bottom border-2 border-info d-inline-block">Search</h3>
                    <div className="position-relative">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="form-control form-control-lg fs-6 ps-5"
                    />
                    <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
                    </div>
                </div>
                </Reveal>

                {/* Recent Posts */}
                <Reveal delay={200}>
                <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
                    <h3 className="h5 fw-bold text-brand-dark mb-4 pb-2 border-bottom border-2 border-info d-inline-block">Latest Insights</h3>
                    <div className="d-flex flex-column gap-3">
                    {recentPosts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                        <div key={p.id} className="d-flex gap-3">
                        <div className="flex-shrink-0" style={{ width: '70px', height: '70px' }}>
                            <img src={p.image} alt={p.title} className="w-100 h-100 object-cover rounded-3" />
                        </div>
                        <div>
                            <h4 className="h6 fw-bold mb-1">
                            <Link to={`/blog/${p.slug}`} className="text-decoration-none text-dark hover-text-primary" dangerouslySetInnerHTML={{ __html: p.title }} />
                            </h4>
                            <span className="small text-muted">{p.date}</span>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </Reveal>

                {/* Categories */}
                <Reveal delay={300}>
                <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
                    <h3 className="h5 fw-bold text-brand-dark mb-3 pb-2 border-bottom border-2 border-info d-inline-block">Categories</h3>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    {categories.map((cat, idx) => (
                        <li key={idx}>
                        <Link to="/blog" className="text-decoration-none text-secondary d-flex justify-content-between align-items-center py-1 border-bottom border-light hover-text-primary">
                            <span>{cat}</span>
                            <span className="small text-muted">({recentPosts.filter(p => p.category === cat).length})</span>
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                </Reveal>

                {/* CTA Widget */}
                <Reveal delay={400}>
                <div className="sticky-top" style={{ top: '100px' }}>
                    <ContactForm />
                </div>
                </Reveal>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePost;