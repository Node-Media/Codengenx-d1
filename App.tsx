import React from 'react';
import Navbar from './components/Navbar';
import HeroGrid from './components/HeroGrid';
import CourseCard from './components/CourseCard';
import AiCounselor from './components/AiCounselor';
import Footer from './components/Footer';
import { COURSES } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-black font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroGrid />

        {/* Featured Courses */}
        <section id="courses" className="py-24 px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 block">Our Catalog</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Expert-led courses for <br/> ambitious engineers.</h2>
            </div>
            <button className="border-b-2 border-brand-black pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors">
              View All Courses
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* AI Counselor Section */}
        <section id="ai-advisor">
          <AiCounselor />
        </section>

        {/* Newsletter / CTA */}
        <section className="bg-brand-orange text-white py-24 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
            Join 50,000+ engineers mastering their craft with SkillForge. Get started today and transform your career.
          </p>
          <button className="bg-white text-brand-orange px-10 py-4 font-bold text-lg hover:bg-gray-100 transition-colors">
            Get Started Now
          </button>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}

export default App;