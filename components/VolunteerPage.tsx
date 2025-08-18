

import React from 'react';
import { UsersIcon, CoffeeIcon, SparklesIcon, LeafIcon, FacebookIcon, InstagramIcon, GlobeIcon } from './icons';

interface VolunteerOpportunity {
    icon: React.ElementType;
    title: string;
    description: string;
    links?: {
        url: string;
        icon: React.ElementType;
        label: string;
    }[];
}

const opportunities: VolunteerOpportunity[] = [
    {
        icon: UsersIcon,
        title: 'RIA Stugan Falun',
        description: 'Help serve our community at the RIA Stugan, offering support and fellowship to those in need.',
        links: [
            { url: 'https://www.facebook.com/HelaManniskanFalun', icon: FacebookIcon, label: 'Facebook' },
            { url: 'https://www.instagram.com/riastugan_falun/', icon: InstagramIcon, label: 'Instagram' },
            { url: 'https://helamanniskan.se/falun/', icon: GlobeIcon, label: 'Website' },
        ]
    },
    {
        icon: CoffeeIcon,
        title: 'Lunch & Fika Team',
        description: 'Be part of the team that prepares and serves coffee and snacks after our services, fostering fellowship.'
    },
    {
        icon: SparklesIcon,
        title: 'Church Cleaning',
        description: 'Help keep our church building clean and welcoming for services and events.'
    },
    {
        icon: LeafIcon,
        title: 'Gardening',
        description: 'Use your green thumb to help maintain the church grounds and create a beautiful space for all.'
    }
];

const VolunteerCard: React.FC<{ opportunity: VolunteerOpportunity }> = ({ opportunity }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center">
        <div className="bg-church-gold/10 p-4 rounded-full mb-4">
             <opportunity.icon className="h-8 w-8 text-church-gold" />
        </div>
        <h3 className="text-xl font-bold text-church-blue font-serif mb-2">{opportunity.title}</h3>
        <p className="text-church-gray flex-grow mb-4">{opportunity.description}</p>
        
        {opportunity.links && (
            <div className="w-full pt-4 mt-auto border-t border-gray-200">
                <div className="flex justify-center items-center space-x-6">
                    {opportunity.links.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${opportunity.title} on ${link.label}`}
                            className="text-church-gray hover:text-church-gold transition-colors duration-300"
                        >
                            <link.icon className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>
        )}
    </div>
);


const VolunteerPage: React.FC = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-4">Volunteer Opportunities</h1>
                    <p className="text-lg text-church-gray mb-12 max-w-3xl mx-auto">
                        Your time and talents are a gift to the church. Find a team below where you can connect, serve, and grow. If you're interested in serving in one of these areas, please reach out to us during a service or contact us at <a href="mailto:info@fristadenfalun.se" className="text-church-gold hover:underline">info@fristadenfalun.se</a>.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {opportunities.map((op, index) => (
                        <VolunteerCard key={index} opportunity={op} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VolunteerPage;