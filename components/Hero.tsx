
import React from 'react';

const Hero: React.FC = () => {
  const handlePlanVisitClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'plan-visit';
  };

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-8">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 leading-tight animate-fade-in-down">
          Welcome to Fristaden Falun
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
          A place to believe, belong, and become. Join us this Sunday!
        </p>
        <a 
          href="#plan-visit"
          onClick={handlePlanVisitClick}
          className="bg-church-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-church-gold transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-600 cursor-pointer"
        >
          Plan Your Visit
        </a>
      </div>
    </section>
  );
};

export default Hero;
