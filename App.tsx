import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

// Lazy load below-the-fold components to reduce initial bundle size
const Problem = lazy(() => import('./components/Problem').then(module => ({ default: module.Problem })));
const Philosophy = lazy(() => import('./components/Philosophy').then(module => ({ default: module.Philosophy })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Industries = lazy(() => import('./components/Industries').then(module => ({ default: module.Industries })));
const CTA = lazy(() => import('./components/CTA').then(module => ({ default: module.CTA })));
const SEOService = lazy(() => import('./components/SEOService').then(module => ({ default: module.SEOService })));
const WebDesignService = lazy(() => import('./components/WebDesignService').then(module => ({ default: module.WebDesignService })));
const MarketingAutomationService = lazy(() => import('./components/MarketingAutomationService').then(module => ({ default: module.MarketingAutomationService })));
const SocialMediaService = lazy(() => import('./components/SocialMediaService').then(module => ({ default: module.SocialMediaService })));
const PerformanceMarketingService = lazy(() => import('./components/PerformanceMarketingService').then(module => ({ default: module.PerformanceMarketingService })));
const ContentMarketingService = lazy(() => import('./components/ContentMarketingService').then(module => ({ default: module.ContentMarketingService })));
const WebDevelopmentService = lazy(() => import('./components/WebDevelopmentService').then(module => ({ default: module.WebDevelopmentService })));
const AppDevelopmentService = lazy(() => import('./components/AppDevelopmentService').then(module => ({ default: module.AppDevelopmentService })));
const GraphicDesignService = lazy(() => import('./components/GraphicDesignService').then(module => ({ default: module.GraphicDesignService })));
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));

// Minimal loader for sections
const SectionLoader = () => (
  <div className="w-full h-48 flex items-center justify-center opacity-50">
    <div className="w-2 h-2 bg-brand-orange rounded-full animate-ping"></div>
  </div>
);

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Problem />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Philosophy />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Industries />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CTA />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <div className="font-sans antialiased bg-white selection:bg-brand-orange selection:text-white min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/seo" element={
            <Suspense fallback={<SectionLoader />}>
              <SEOService />
            </Suspense>
          } />
          <Route path="/services/web-design" element={
            <Suspense fallback={<SectionLoader />}>
              <WebDesignService />
            </Suspense>
          } />
          <Route path="/services/marketing-automation" element={
            <Suspense fallback={<SectionLoader />}>
              <MarketingAutomationService />
            </Suspense>
          } />
          <Route path="/services/social-media" element={
            <Suspense fallback={<SectionLoader />}>
              <SocialMediaService />
            </Suspense>
          } />
          <Route path="/services/performance-marketing" element={
            <Suspense fallback={<SectionLoader />}>
              <PerformanceMarketingService />
            </Suspense>
          } />
          <Route path="/services/content-marketing" element={
            <Suspense fallback={<SectionLoader />}>
              <ContentMarketingService />
            </Suspense>
          } />
          <Route path="/services/web-development" element={
            <Suspense fallback={<SectionLoader />}>
              <WebDevelopmentService />
            </Suspense>
          } />
          <Route path="/services/app-development" element={
            <Suspense fallback={<SectionLoader />}>
              <AppDevelopmentService />
            </Suspense>
          } />
          <Route path="/services/graphic-design" element={
            <Suspense fallback={<SectionLoader />}>
              <GraphicDesignService />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
