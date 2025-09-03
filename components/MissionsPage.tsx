

import React from 'react';
import { SheepIcon, FamilyIcon, BookOpenIcon, UsersIcon } from './icons';

interface Mission {
    icon: React.ElementType;
    title: string;
    location?: string;
    description: string;
    link?: string;
}

const missions: Mission[] = [
    {
        icon: UsersIcon,
        title: 'Hela Människan',
        location: 'Falun - Sweden',
        description: 'Working to strengthen and support people in vulnerable situations, combat exclusion, and provide opportunities for positive change.',
        link: '#mission/hela-manniskan'
    },
    {
        icon: SheepIcon,
        title: 'Other Sheeps',
        location: 'Parnamirim - Brazil',
        description: "Supporting a project to provide care, education, and Christian values for children in Parnamirim, Brazil.",
        link: '#mission/other-sheeps'
    },
    {
        icon: FamilyIcon,
        title: 'Love and Concern',
        location: 'Chennai - India',
        description: 'Partnering with the Love and Concern Center to provide medical care, education, and support to vulnerable communities.',
        link: '#mission/india'
    },
    {
        icon: BookOpenIcon,
        title: 'Underground Church Support',
        location: 'Eritrea',
        description: 'Supporting the underground church in Eritrea, providing resources and encouragement to believers facing persecution.',
        link: '#mission/eritreia'
    }
];

const MissionCard: React.FC<{ mission: Mission }> = ({ mission }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        window.location.hash = hash;
    };
    
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
            <div className="bg-church-gold/10 p-4 rounded-full mb-4">
                 <mission.icon className="h-8 w-8 text-church-gold" />
            </div>
            <h3 className="text-xl font-bold text-church-blue font-serif mb-1">{mission.title}</h3>
            {mission.location && (
                <p className="text-sm font-semibold text-church-gray mb-3">{mission.location}</p>
            )}
            <p className="text-church-gray flex-grow">{mission.description}</p>
            {mission.link && (
                 <a 
                    href={mission.link}
                    onClick={(e) => handleNavClick(e, mission.link!)}
                    className="mt-4 bg-church-blue text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-300 self-center text-sm font-semibold">
                    Learn More
                </a>
            )}
        </div>
    );
};


const MissionsPage: React.FC = () => {
    const handleBackToHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#home';
    };

    return (
        <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-6">
                <div className="text-left mb-6">
                    <a href="#home" onClick={handleBackToHomeClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block font-semibold cursor-pointer">&larr; Back to Home</a>
                </div>
                 <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-4">Our Global Missions</h1>
                    <p className="text-lg text-church-gray mb-12 max-w-3xl mx-auto">
                       We believe in the Great Commission to go and make disciples of all nations. We are proud to support these missions financially and through prayer. Learn more about our partners and how you can get involved.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {missions.map((op, index) => (
                        <MissionCard key={index} mission={op} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionsPage;