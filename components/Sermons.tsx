import React, { useState, useEffect } from 'react';
import type { Sermon, AudioTeaching, StudyGuide } from '../types';
import Chatbot from './Chatbot';
import { HeadphonesIcon, DownloadIcon } from './icons';

// --- Card and Skeleton Components ---

const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <div className="relative">
            <img src={sermon.imageUrl} alt={sermon.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                 <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch sermon: ${sermon.title}`} className="bg-white/20 text-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
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

const AudioCard: React.FC<{ teaching: AudioTeaching }> = ({ teaching }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group p-6 flex flex-col">
        <div className="flex items-start justify-between mb-4">
            <div className="bg-church-gold/10 p-3 rounded-full">
                <HeadphonesIcon className="h-6 w-6 text-church-gold" />
            </div>
             <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{teaching.duration}</span>
        </div>
        <h3 className="text-xl font-bold text-church-blue font-serif mb-2 flex-grow">{teaching.title}</h3>
        <p className="text-church-gray text-sm mb-1">{teaching.speaker}</p>
        <p className="text-gray-500 text-xs mb-4">{teaching.date}</p>
        <a href={teaching.audioUrl} target="_blank" rel="noopener noreferrer" className="mt-auto bg-church-blue text-white w-full text-center px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-sm font-semibold">
            Listen Now
        </a>
    </div>
);

const StudyGuideCard: React.FC<{ guide: StudyGuide }> = ({ guide }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <img src={guide.imageUrl} alt={guide.title} className="w-full h-40 object-cover"/>
        <div className="p-6 flex flex-col">
            <h3 className="text-xl font-bold text-church-blue font-serif mb-2 h-20">{guide.title}</h3>
            <p className="text-church-gray text-sm mb-4 flex-grow">{guide.description}</p>
            <a href={guide.pdfUrl} target="_blank" rel="noopener noreferrer" className="mt-auto bg-church-blue text-white w-full flex items-center justify-center px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-sm font-semibold">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download PDF
            </a>
        </div>
    </div>
);

const CardSkeleton: React.FC = () => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
        <div className="mt-4 h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2 animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-1/3 animate-pulse"></div>
    </div>
);


const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 font-semibold rounded-full transition-colors duration-300 text-sm md:text-base ${
            active 
            ? 'bg-church-gold text-white shadow-md' 
            : 'bg-white text-church-gray hover:bg-church-gold/10'
        }`}
    >
        {children}
    </button>
);


const ResourcesSection: React.FC = () => {
    const [sermons, setSermons] = useState<Sermon[]>([]);
    const [audioTeachings, setAudioTeachings] = useState<AudioTeaching[]>([]);
    const [studyGuides, setStudyGuides] = useState<StudyGuide[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'sermons' | 'audio' | 'guides'>('sermons');

    useEffect(() => {
        const mockSermons: Sermon[] = [
          { id: 1, title: 'The Power of Forgiveness', speaker: 'Pastor John Doe', date: 'August 11, 2024', imageUrl: 'https://picsum.photos/500/300?random=10', videoUrl: '#' },
          { id: 2, title: 'Living with Purpose', speaker: 'Pastor Jane Smith', date: 'August 4, 2024', imageUrl: 'https://picsum.photos/500/300?random=11', videoUrl: '#' },
          { id: 3, title: 'Faith Over Fear', speaker: 'Guest Speaker Mike Chan', date: 'July 28, 2024', imageUrl: 'https://picsum.photos/500/300?random=12', videoUrl: '#' }
        ];

        const mockAudio: AudioTeaching[] = [
            { id: 1, title: 'Understanding Grace', speaker: 'Pastor John Doe', date: 'August 14, 2024', audioUrl: '#', duration: '34 min' },
            { id: 2, title: 'The Heart of a Servant', speaker: 'Elder Mary Phillips', date: 'August 7, 2024', audioUrl: '#', duration: '42 min' },
            { id: 3, title: 'Parables of Jesus: The Sower', speaker: 'Pastor Jane Smith', date: 'July 31, 2024', audioUrl: '#', duration: '38 min' },
        ];
        
        const mockGuides: StudyGuide[] = [
            { id: 1, title: 'Book of Romans: Chapter 1 Study Guide', description: 'A verse-by-verse companion for our Wednesday Bible Study.', pdfUrl: '#', imageUrl: 'https://picsum.photos/500/300?random=13' },
            { id: 2, title: 'Family Devotional: The Armor of God', description: 'A fun and engaging guide for families to study Ephesians 6 together.', pdfUrl: '#', imageUrl: 'https://picsum.photos/500/300?random=14' },
            { id: 3, title: 'Spiritual Disciplines Handbook', description: 'Practical steps for prayer, fasting, and scripture meditation.', pdfUrl: '#', imageUrl: 'https://picsum.photos/500/300?random=15' },
        ];

        const timer = setTimeout(() => {
            setSermons(mockSermons);
            setAudioTeachings(mockAudio);
            setStudyGuides(mockGuides);
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                </div>
            );
        }
        
        switch(activeTab) {
            case 'sermons':
                return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sermons.map(sermon => <SermonCard key={sermon.id} sermon={sermon} />)}
                    </div>
                );
            case 'audio':
                 return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {audioTeachings.map(teaching => <AudioCard key={teaching.id} teaching={teaching} />)}
                    </div>
                );
            case 'guides':
                 return (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {studyGuides.map(guide => <StudyGuideCard key={guide.id} guide={guide} />)}
                    </div>
                );
            default:
                return null;
        }
    };


  return (
    <section className="py-20 bg-church-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-serif mb-4">Study & Grow Resources</h2>
            <p className="text-lg text-church-gray mb-8 max-w-2xl mx-auto">Explore sermons, audio teachings, and study guides to deepen your faith.</p>
        </div>
        
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12 p-2 bg-white/60 rounded-full max-w-md mx-auto shadow-sm">
            <TabButton active={activeTab === 'sermons'} onClick={() => setActiveTab('sermons')}>Sermons</TabButton>
            <TabButton active={activeTab === 'audio'} onClick={() => setActiveTab('audio')}>Audios</TabButton>
            <TabButton active={activeTab === 'guides'} onClick={() => setActiveTab('guides')}>Study Guides</TabButton>
        </div>

        <div className="mb-20">
            {renderContent()}
        </div>
        
        <Chatbot />
      </div>
    </section>
  );
};

export default ResourcesSection;