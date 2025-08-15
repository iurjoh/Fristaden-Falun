import React from 'react';

const Give: React.FC = () => {
  const handleGiveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = '#give-page';
  };

  return (
    <section className="py-20 bg-church-blue text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:text-left text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Generosity & Giving</h2>
            <p className="text-lg text-church-light-gray/80 mb-8 max-w-xl md:mx-0 mx-auto">
              Your generosity fuels the mission of our church and helps us make a difference in our city and beyond. Thank you for partnering with us.
            </p>
            <button
              onClick={handleGiveClick}
              className="bg-church-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-church-gold transition-all duration-300 transform hover:scale-105"
            >
              Support Us
            </button>
          </div>
          <div className="order-first md:order-last">
            <img 
              src="https://picsum.photos/seed/giving/600/400"
              alt="Hands holding coins to represent giving"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Give;