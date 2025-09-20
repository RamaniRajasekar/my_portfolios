
import React from 'react';

const HeroSection: React.FC = () => {
    
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20">
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://picsum.photos/seed/ramanir/400/400"
          alt="Ramani R"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#B57170] shadow-lg shadow-[#B57170]/20"
        />
      </div>
      <div className="md:w-1/2 md:pl-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Ramani R</h1>
        <p className="text-xl md:text-2xl text-[#B57170] font-light mb-8">Front-End Developer | AI & ML Enthusiast</p>
        <button
          onClick={scrollToProjects}
          className="bg-[#B57170] text-black font-semibold py-3 px-8 rounded-full hover:bg-black hover:text-[#B57170] border-2 border-[#B57170] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
