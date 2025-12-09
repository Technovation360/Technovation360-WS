import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
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
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);

  React.useEffect(() => {
    // Only scroll to top if not navigating to a hash on the same page
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Manual scroll handling for HashRouter */}
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