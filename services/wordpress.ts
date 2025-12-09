import { BlogPost, WPPost } from '../types';
import { BLOG_POSTS } from '../constants';

// Replace this with your actual WordPress site URL when ready
// e.g., 'https://your-wordpress-site.com/wp-json/wp/v2';
const WP_API_BASE = ''; 

export const fetchPosts = async (): Promise<BlogPost[]> => {
  if (!WP_API_BASE) {
    // Return mock data if no API is configured
    return new Promise((resolve) => {
      setTimeout(() => resolve(BLOG_POSTS), 500);
    });
  }

  try {
    const response = await fetch(`${WP_API_BASE}/posts?_embed&per_page=10`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    
    const data: WPPost[] = await response.json();
    
    return data.map(transformWPPost);
  } catch (error) {
    console.error("Error fetching from WordPress:", error);
    return BLOG_POSTS; // Fallback to mock data on error
  }
};

export const fetchPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  if (!WP_API_BASE) {
    return new Promise((resolve) => {
      const post = BLOG_POSTS.find(p => p.slug === slug);
      setTimeout(() => resolve(post), 500);
    });
  }

  try {
    const response = await fetch(`${WP_API_BASE}/posts?_embed&slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch post');
    
    const data: WPPost[] = await response.json();
    if (data.length === 0) return undefined;

    return transformWPPost(data[0]);
  } catch (error) {
    console.error("Error fetching post:", error);
    return BLOG_POSTS.find(p => p.slug === slug);
  }
};

// Helper to transform WP API format to our internal BlogPost format
const transformWPPost = (post: WPPost): BlogPost => {
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                'https://picsum.photos/800/600?random=' + post.id;
  
  const author = post._embedded?.author?.[0]?.name || 'TechNovation360 Team';
  
  // Extract categories (simplistic approach)
  const categories = post._embedded?.['wp:term']?.flat().filter(t => t.taxonomy === 'category') || [];
  const category = categories.length > 0 ? categories[0].name : 'Insights';
  
  // Extract tags
  const tags = post._embedded?.['wp:term']?.flat().filter(t => t.taxonomy === 'post_tag').map(t => t.name) || [];

  return {
    id: post.id.toString(),
    slug: post.slug,
    title: post.title.rendered,
    excerpt: stripHtml(post.excerpt.rendered),
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    author,
    category,
    image,
    tags
  };
};

const stripHtml = (html: string) => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};