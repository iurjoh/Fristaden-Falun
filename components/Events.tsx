import React from 'react';
import type { Event } from '../types';

const eventsData: Event[] = [
  {
    id: 1,
    title: 'Service',
    date: 'Sunday',
    time: '11:00 AM - 12:30 PM',
    description: 'A moment of worship and adoration to our God, with praise, words, testimony and fellowship among brothers.'
  },
  {
    id: 2,
    title: 'Bible Study',
    date: 'Wednesday',
    time: '18:00 PM - 19:00 PM',
    description: 'We meet every week at church or online to study our God words together.'
  },
  {
    id: 3,
    title: 'Worship & Prayer',
    date: 'Wednesday',
    time: '10:00 AM - 11:00 AM',
    description: 'A time dedicated to worship, prayer, and seeking God together as a church family.'
  },
];

const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s*&\s*/g, ' ').replace(/\s+/g, '-');
};


const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
};


const EventCard: React.FC<{ event: Event }> = ({ event }) => {
    const slug = generateSlug(event.title);
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <h3 className="text-xl font-bold text-church-blue font-serif mb-2">{event.title}</h3>
            <p className="text-church-gold font-semibold mb-3">{event.date} &bull; {event.time}</p>
            <p className="text-church-gray flex-grow">{event.description}</p>
            <a 
                href={`#event/${slug}`}
                onClick={(e) => handleNavClick(e, `#event/${slug}`)}
                aria-label={`More information about ${event.title}`}
                className="mt-4 bg-church-blue text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300 self-start text-sm font-semibold">
                More Info
            </a>
        </div>
    );
};


const Events: React.FC = () => {
  return (
    <section className="py-20 bg-church-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">Upcoming Events</h2>
        <p className="text-lg text-church-gray mb-12 max-w-2xl mx-auto">There's always something happening at Fristaden Falun. Find a place to connect and grow.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {eventsData.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Events;