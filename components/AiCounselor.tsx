import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2, Bot, User } from 'lucide-react';
import { getCareerAdvice } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const AiCounselor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your CodengenX Career Advisor. Tell me about your career goals (e.g., "I want to become a Full Stack Developer") and I will recommend the best learning path for you.' }
  ]);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || status === LoadingState.LOADING) return;

    const userText = query.trim();
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setStatus(LoadingState.LOADING);

    try {
      const response = await getCareerAdvice(userText);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
      setStatus(LoadingState.SUCCESS);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Something went wrong. Please try again." }]);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-b border-gray-300 bg-white">
      {/* Left: Branding & Info */}
      <div className="bg-brand-black text-white p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="w-16 h-16 bg-brand-orange mb-8 flex items-center justify-center rounded-2xl shadow-lg relative z-10 rotate-3 transform transition-transform hover:rotate-6">
          <Sparkles className="text-white" size={32} />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 relative z-10">AI Career Counselor</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md relative z-10">
          Not sure which course is right for you? Our Gemini-powered AI advisor can analyze your interests and goals to suggest the perfect learning roadmap.
        </p>
        
        <div className="flex flex-col gap-5 text-sm text-gray-400 relative z-10">
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
              <span className="text-white font-bold">1</span>
            </div>
            <span>Share your career aspirations</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
              <span className="text-white font-bold">2</span>
            </div>
            <span>Get instant, personalized analysis</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
              <span className="text-white font-bold">3</span>
            </div>
            <span>Enroll in the perfect course</span>
          </div>
        </div>
      </div>

      {/* Right: Chat Interface */}
      <div className="bg-gray-50 p-4 md:p-8 flex flex-col h-[500px] lg:h-auto min-h-[500px] lg:max-h-[700px]">
        <div className="flex-grow overflow-y-auto mb-6 space-y-6 pr-2 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fadeIn`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-white border border-gray-200' : 'bg-brand-orange text-white'}`}>
                {msg.role === 'user' ? <User size={18} className="text-gray-600" /> : <Bot size={20} />}
              </div>
              <div className={`p-5 max-w-[85%] text-sm md:text-base leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-black text-white rounded-2xl rounded-tr-none' 
                  : 'bg-white border border-gray-200 text-gray-700 rounded-2xl rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {status === LoadingState.LOADING && (
             <div className="flex gap-4 animate-pulse">
               <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0">
                 <Bot size={20} />
               </div>
               <div className="bg-white border border-gray-200 p-5 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3">
                 <Loader2 size={18} className="animate-spin text-brand-orange" />
                 <span className="text-gray-500 text-sm font-medium">Analyzing your request...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="relative mt-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="E.g., I want to work at Google..."
            className="w-full bg-white border border-gray-300 pl-6 pr-16 py-4 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all shadow-sm rounded-lg"
            disabled={status === LoadingState.LOADING}
          />
          <button 
            type="submit" 
            disabled={!query.trim() || status === LoadingState.LOADING}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-brand-black text-white rounded-md hover:bg-brand-orange disabled:opacity-50 disabled:hover:bg-brand-black transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiCounselor;