import React from 'react';
import { Course } from '../types';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group border border-gray-200 bg-white hover:border-brand-black/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="h-52 overflow-hidden relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-black shadow-sm">
          {course.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between text-gray-500 text-xs mb-4 font-medium uppercase tracking-wide">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-brand-orange" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-brand-orange" />
            <span>Course</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-brand-black mb-3 leading-tight group-hover:text-brand-orange transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow border-l-2 border-gray-100 pl-3">
          {course.description}
        </p>
        <button className="w-full py-3 px-4 bg-gray-50 group-hover:bg-brand-black group-hover:text-white border border-gray-200 group-hover:border-brand-black flex items-center justify-between text-sm font-bold text-brand-black transition-all duration-300 rounded-sm">
          View Curriculum
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;