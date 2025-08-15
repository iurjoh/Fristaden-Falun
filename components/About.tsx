
import React from 'react';

const About: React.FC = () => {
  const handleBeliefsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'beliefs';
  };

  return (
    <section className="py-20 bg-church-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">About Us</h2>
            <p className="text-lg text-church-gray mb-4">
              We are a vibrant, multicultural church with a passion to see people's lives changed by the love of God. Our doors are wide open to people from all backgrounds, regardless of where they are on their spiritual journey.
            </p>
            <p className="text-lg text-church-gray mb-6">
              Our mission is to be a beacon of hope and a place of belonging. We believe in creating a community where people can grow in their faith, discover their purpose, and make a difference in the world.
            </p>
            <a href="#beliefs" onClick={handleBeliefsClick} className="text-church-gold font-semibold hover:underline cursor-pointer">
              Learn more about our beliefs &rarr;
            </a>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/600/400?random=1" 
              alt="Church community gathering" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;