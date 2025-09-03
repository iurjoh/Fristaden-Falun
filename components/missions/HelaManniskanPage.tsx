
import React from 'react';
import { UsersIcon, CheckCircleIcon, FacebookIcon, InstagramIcon, GlobeIcon } from '../icons';

const HelaManniskanPage: React.FC = () => {
    const handleBackToMissionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#missions-page';
    };

    const galleryImages = [
        'https://picsum.photos/seed/hela1/600/400',
        'https://picsum.photos/seed/hela2/600/400',
        'https://picsum.photos/seed/hela3/600/400',
    ];

    const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <h2 className="text-3xl font-bold text-church-blue font-serif mt-10 mb-6">
            {children}
        </h2>
    );

    const ListItem: React.FC<{ children: React.ReactNode; icon: React.ElementType }> = ({ children, icon: Icon }) => (
        <li className="flex items-start">
            <Icon className="h-6 w-6 text-church-gold mr-3 mt-1 shrink-0" />
            <span>{children}</span>
        </li>
    );

    return (
        <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-6">
                <div className="text-left mb-12">
                    <a href="#missions-page" onClick={handleBackToMissionsClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block font-semibold cursor-pointer">
                        &larr; Back to Missions
                    </a>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <img src="https://picsum.photos/seed/hela-banner/1200/500" alt="Community support gathering" className="w-full h-64 object-cover"/>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-2">Hela Människan i Falun</h1>
                        <p className="text-church-gold font-semibold text-xl mb-6">The Whole Person in Falun</p>
                        
                        <div className="space-y-4 text-church-gray text-lg">
                            <p>
                               This organization works to strengthen and support people in vulnerable situations, combat exclusion, and provide opportunities for positive change.
                            </p>
                        </div>
                        
                        <SectionHeader>Our Partnership</SectionHeader>
                         <ul className="space-y-4 text-church-gray text-lg">
                            <ListItem icon={UsersIcon}>
                                The church Fristaden is a main partner of Hela Människan Falun. Our congregation members volunteer on weekends to serve breakfast to all guests.
                            </ListItem>
                             <ListItem icon={CheckCircleIcon}>
                                Our chairman, David Fritzson, served as the chairman of Hela Människan Falun in 2024.
                            </ListItem>
                             <ListItem icon={CheckCircleIcon}>
                                David Johansson continues to lead the operation as its director.
                            </ListItem>
                        </ul>
                        
                        <div className="mt-12 border-t pt-10">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6 text-center">Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((src, index) => (
                                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                        <img 
                                            src={src} 
                                            alt={`Hela Människan gallery image ${index + 1}`} 
                                            className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 border-t pt-10 text-center">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6">Follow Their Journey</h3>
                            <div className="flex justify-center items-center space-x-6">
                                <a href="https://www.facebook.com/HelaManniskanFalun" target="_blank" rel="noopener noreferrer" aria-label="Hela Människan on Facebook" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <FacebookIcon className="h-8 w-8" />
                                </a>
                                <a href="https://www.instagram.com/riastugan_falun/" target="_blank" rel="noopener noreferrer" aria-label="Hela Människan on Instagram" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <InstagramIcon className="h-8 w-8" />
                                </a>
                                <a href="https://helamanniskan.se/falun/" target="_blank" rel="noopener noreferrer" aria-label="Hela Människan Website" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <GlobeIcon className="h-8 w-8" />
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 border-t pt-8 text-center">
                            <a href="#missions-page" onClick={handleBackToMissionsClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block font-semibold cursor-pointer">
                                &larr; Back to Missions
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelaManniskanPage;