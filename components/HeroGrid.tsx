import React from 'react';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';

const HeroGrid: React.FC = () => {
  return (
    <section className="w-full border-b border-gray-300 bg-brand-offwhite">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-80px)]">
        
        {/* --- ROW 1 --- */}

        {/* Cell 1: Main Title Area (Span 5) */}
        <div className="md:col-span-5 md:border-r border-b border-gray-300 p-8 lg:p-16 flex flex-col justify-center relative bg-brand-offwhite">
          <h1 className="text-5xl lg:text-7xl font-semibold text-brand-black leading-[1.1] mb-10 z-10">
            Master Skills <br />
            Achieve <br />
            Goals
          </h1>
          <div className="z-10">
            <Button variant="primary" className="!rounded-none !px-8 !py-4 text-lg shadow-xl hover:shadow-2xl transition-all">
              Start Learning Today
            </Button>
          </div>
        </div>

        {/* Cell 2: Hero Image (Span 4) */}
        {/* Used absolute positioning on desktop to ensuring it fills the height of the row dictated by the text cell */}
        <div className="md:col-span-4 md:border-r border-b border-gray-300 relative h-96 md:h-auto group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop" 
            alt="Student with books" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-500"></div>
        </div>

        {/* Cell 3: Join CTA Area (Span 3) */}
        <div className="md:col-span-3 border-b border-gray-300 p-8 flex flex-col justify-between bg-white md:bg-gray-100/50">
          <div className="flex justify-end">
             <button className="border border-brand-black px-6 py-3 flex items-center gap-2 hover:bg-brand-black hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md bg-white hover:bg-brand-black">
                Join Now <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
             </button>
          </div>
          <div className="mt-12 md:mt-0">
             <p className="text-gray-500 max-w-[150px] text-right ml-auto leading-relaxed font-medium">
               <span className="text-brand-orange font-bold">50k+</span> learners from around the world.
             </p>
          </div>
        </div>


        {/* --- ROW 2 --- */}

        {/* Cell 4: Graduates Image (Span 3) */}
        <div className="md:col-span-3 md:border-r border-b md:border-b-0 border-gray-300 h-64 md:h-80 relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2940&auto=format&fit=crop" 
            alt="Graduates throwing hats" 
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Cell 5: Orange Stat Box (Span 2) */}
        <div className="md:col-span-2 md:border-r border-b md:border-b-0 border-gray-300 bg-brand-orange p-6 flex flex-col justify-between text-white relative h-64 md:h-80 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
          
          {/* Animated decorative circle */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full transition-transform duration-700 group-hover:scale-150"></div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-1 tracking-tight">200+</h3>
            <p className="text-sm font-medium opacity-90">Expert Instructors</p>
          </div>
          <div className="relative z-10">
            <p className="text-xs leading-relaxed opacity-90 border-t border-white/30 pt-4">
              Industry professionals guiding your journey.
            </p>
          </div>
        </div>

        {/* Cell 6: Mission Text (Span 4) */}
        <div className="md:col-span-4 md:border-r border-b md:border-b-0 border-gray-300 p-8 flex flex-col justify-center h-auto md:h-80 bg-white">
          <h4 className="text-lg font-bold mb-6 text-brand-black uppercase tracking-wide">
            Empowering Learners, <br/> Transforming Futures
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            At CodengenX, we believe education should be accessible, engaging, and tailored to every learner.
            Our mission is to bridge the gap between knowledge and opportunity.
          </p>
        </div>

        {/* Cell 7: Stats & Graphic (Span 3) */}
        <div className="md:col-span-3 flex flex-col h-auto md:h-80 border-b md:border-b-0 border-gray-300 md:border-l-0">
          <div className="flex-1 p-8 border-b border-gray-300 bg-gray-50 flex items-center justify-center md:justify-start">
             <div>
                <h3 className="text-4xl font-bold text-brand-black">95%</h3>
                <p className="text-gray-500 text-sm mt-1">Placement Rate</p>
             </div>
          </div>
          <div className="flex-1 relative overflow-hidden bg-white group">
            {/* Geometric Diamond Shape */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 border-2 border-brand-black/5 rotate-45 transform transition-transform duration-700 group-hover:rotate-90"></div>
               <div className="absolute w-32 h-32 bg-gray-100 rotate-45 transform translate-y-1/2 group-hover:translate-y-1/3 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroGrid;