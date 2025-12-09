import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhoAreWe from './pages/WhoAreWe';
import ServicePage from './pages/ServicePage';
import SolutionPage from './pages/SolutionPage';
import Solutions from './pages/Solutions';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import CaseStudies from './pages/CaseStudies';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
          
          {/* Consolidated Solutions Page */}
          <Route path="/solutions" element={<Solutions />} />
          
          {/* Detailed Solution Page (Optional/Backward compatibility) */}
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          
          {/* Service Page reused for services */}
          <Route path="/services/:slug" element={<ServicePage type="service" />} />
          
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;