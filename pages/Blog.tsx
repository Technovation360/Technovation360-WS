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
    <div className="bg-brand-light min-vh-100">
      {/* Page Header */}
      <div className="bg-brand-dark py-5 text-center text-white position-relative overflow-hidden">
         <div className="hero-bg-pattern"></div>
         <div className="container position-relative z-1 py-4">
           <Reveal>
             <h1 className="display-4 fw-bold mb-3">Insights & News</h1>
           </Reveal>
           <Reveal delay={200}>
             <p className="lead text-blue-200">Latest trends in Technology and Digital Transformation</p>
           </Reveal>
         </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          
          {/* Main Content: Post List */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-5">
                {loading ? (
                <div className="text-center py-5">
                    <Loader2 className="animate-spin text-brand-primary mx-auto" size={48} />
                </div>
                ) : filteredPosts.length > 0 ? (
                filteredPosts.map((post, idx) => (
                    <Reveal key={post.id} delay={idx * 100}>
                    <article className="bg-white rounded-4 shadow-sm overflow-hidden border border-light h-100">
                        <div className="position-relative" style={{ height: '280px' }}>
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-100 h-100 object-cover"
                        />
                        <div className="position-absolute top-0 start-0 m-3 bg-brand-accent text-white small fw-bold px-3 py-1 rounded shadow-sm text-uppercase">
                            {post.category}
                        </div>
                        </div>
                        <div className="p-4 p-md-5">
                        <div className="d-flex align-items-center gap-4 text-muted small mb-3">
                            <div className="d-flex align-items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                            </div>
                        </div>
                        <h2 className="h3 fw-bold text-brand-dark mb-3">
                            <Link to={`/blog/${post.slug}`} className="text-decoration-none text-dark hover-text-primary transition-all" dangerouslySetInnerHTML={{ __html: post.title }} />
                        </h2>
                        <p className="text-secondary lh-base mb-4">
                            {post.excerpt}
                        </p>
                        <Link 
                            to={`/blog/${post.slug}`} 
                            className="text-brand-accent fw-bold text-decoration-none d-inline-flex align-items-center gap-2"
                        >
                            Read Article <ArrowRight size={16} />
                        </Link>
                        </div>
                    </article>
                    </Reveal>
                ))
                ) : (
                <div className="text-center py-5 bg-white rounded-4 shadow-sm">
                    <h3 className="h5 fw-bold text-muted">No posts found matching your search.</h3>
                </div>
                )}
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4">
                {/* Search Widget */}
                <Reveal delay={100}>
                <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
                    <h3 className="h5 fw-bold text-brand-dark mb-3 pb-2 border-bottom border-2 border-info d-inline-block">Search</h3>
                    <div className="position-relative">
                    <input 
                        type="text" 
                        placeholder="Search articles..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="form-control form-control-lg fs-6 ps-5"
                    />
                    <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={18} />
                    </div>
                </div>
                </Reveal>

                {/* Categories Widget */}
                <Reveal delay={200}>
                <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
                    <h3 className="h5 fw-bold text-brand-dark mb-3 pb-2 border-bottom border-2 border-info d-inline-block">Categories</h3>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                    {categories.map((cat, idx) => (
                        <li key={idx}>
                        <button 
                            onClick={() => setSearchTerm(cat)}
                            className="btn btn-link text-decoration-none text-secondary w-100 d-flex justify-content-between align-items-center px-0 hover-text-primary"
                        >
                            <span>{cat}</span>
                            <span className="badge bg-light text-secondary rounded-pill">
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
                <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
                    <h3 className="h5 fw-bold text-brand-dark mb-4 pb-2 border-bottom border-2 border-info d-inline-block">Recent Posts</h3>
                    <div className="d-flex flex-column gap-4">
                    {posts.slice(0, 3).map(post => (
                        <div key={post.id} className="d-flex gap-3">
                        <div className="flex-shrink-0" style={{ width: '80px', height: '80px' }}>
                            <img src={post.image} alt={post.title} className="w-100 h-100 object-cover rounded-3" />
                        </div>
                        <div>
                            <h4 className="h6 fw-bold mb-1">
                            <Link to={`/blog/${post.slug}`} className="text-decoration-none text-dark hover-text-primary" dangerouslySetInnerHTML={{ __html: post.title }} />
                            </h4>
                            <span className="small text-muted">{post.date}</span>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </Reveal>

                {/* Newsletter Widget */}
                <Reveal delay={400}>
                <div className="bg-brand-primary p-4 rounded-4 shadow-sm text-white">
                    <h3 className="h5 fw-bold mb-2">Subscribe to Insights</h3>
                    <p className="text-blue-200 small mb-3">Get the latest digital transformation tips directly to your inbox.</p>
                    <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="form-control mb-2"
                    />
                    <button className="btn btn-brand-accent w-100 fw-bold">
                    Subscribe
                    </button>
                </div>
                </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;