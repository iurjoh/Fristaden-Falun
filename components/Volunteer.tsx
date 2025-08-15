import React from 'react';

const Volunteer: React.FC = () => {
  const handleJoinUsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.hash = '#volunteer-page';
  };

  return (
    <section className="py-20 bg-church-light-gray">
      <div className="container mx-auto px-6">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/volunteer/600/400"
                alt="Volunteers working together"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="md:text-left text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">Get Involved & Volunteer</h2>
              <p className="text-lg text-church-gray mb-8 max-w-xl md:mx-0 mx-auto">
                  Serving is a fantastic way to connect with others and make a difference. Explore the areas where you can use your talents.
              </p>
              <button
                onClick={handleJoinUsClick}
                className="bg-church-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-church-blue transition-all duration-300 transform hover:scale-105"
              >
                Join Us
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;