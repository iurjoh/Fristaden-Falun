import React from 'react';

const Missions: React.FC = () => {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = '#missions-page';
  };

  return (
    <section className="py-20 bg-church-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:text-left text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">Missions</h2>
            <p className="text-lg text-church-gray mb-8 max-w-xl md:mx-0 mx-auto">
              The name of our church, Fristaden, literally translates to "The City of Refuge." Just as the cities of refuge in the Bible were safe spaces, we aim to be a sanctuary for those in need. We are passionate about extending this refuge to people around the world through our mission work.
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="bg-church-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-church-blue transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
           <div className="order-first md:order-last">
            <img 
              src="https://picsum.photos/seed/missions/600/400"
              alt="Globe showing different continents"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missions;