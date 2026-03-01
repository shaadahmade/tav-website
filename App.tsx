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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
