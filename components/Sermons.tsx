import React, { useState, useEffect } from 'react';
import type { Sermon } from '../types';
import Chatbot from './Chatbot';

// Skeleton Component for the Sermon Card
const SermonCardSkeleton: React.FC = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
        <div className="p-6">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        </div>
    </div>
);


const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <div className="relative">
            <img src={sermon.imageUrl} alt={sermon.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                 <a href={sermon.videoUrl} aria-label={`Watch sermon: ${sermon.title}`} className="bg-white/20 text-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z"></path></svg>
                 </a>
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-church-blue font-serif mb-2">{sermon.title}</h3>
            <p className="text-church-gray text-sm mb-1">{sermon.speaker}</p>
            <p className="text-gray-500 text-xs">{sermon.date}</p>
        </div>
    </div>
);

const Sermons: React.FC = () => {
    const [sermons, setSermons] = useState<Sermon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data from an API
        const mockSermons: Sermon[] = [
          {
            id: 1,
            title: 'The Power of Forgiveness',
            speaker: 'Pastor John Doe',
            date: 'August 11, 2024',
            imageUrl: 'https://picsum.photos/500/300?random=10',
            videoUrl: '#'
          },
          {
            id: 2,
            title: 'Living with Purpose',
            speaker: 'Pastor Jane Smith',
            date: 'August 4, 2024',
            imageUrl: 'https://picsum.photos/500/300?random=11',
            videoUrl: '#'
          },
          {
            id: 3,
            title: 'Faith Over Fear',
            speaker: 'Guest Speaker Mike Chan',
            date: 'July 28, 2024',
            imageUrl: 'https://picsum.photos/500/300?random=12',
            videoUrl: '#'
          }
        ];

        const timer = setTimeout(() => {
            setSermons(mockSermons);
            setIsLoading(false);
        }, 1500); // Simulate a 1.5 second loading time

        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);


  return (
    <section className="py-20 bg-church-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">Latest Sermons</h2>
            <p className="text-lg text-church-gray mb-12 max-w-2xl mx-auto">Catch up on recent messages and be encouraged throughout your week.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {isLoading ? (
                <>
                    <SermonCardSkeleton />
                    <SermonCardSkeleton />
                    <SermonCardSkeleton />
                </>
            ) : (
                sermons.map(sermon => (
                    <SermonCard key={sermon.id} sermon={sermon} />
                ))
            )}
        </div>
        <Chatbot />
      </div>
    </section>
  );
};

export default Sermons;