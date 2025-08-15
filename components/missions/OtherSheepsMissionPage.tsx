

import React from 'react';
import { CheckCircleIcon, InstagramIcon, YoutubeIcon, GlobeIcon } from '../icons';

const OtherSheepsMissionPage: React.FC = () => {
    const handleBackToMissionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#missions-page';
    };

    const galleryImages = [
        'https://picsum.photos/seed/brazil1/600/400',
        'https://picsum.photos/seed/brazil2/600/400',
        'https://picsum.photos/seed/brazil3/600/400',
        'https://picsum.photos/seed/brazil4/600/400',
        'https://picsum.photos/seed/brazil5/600/400',
        'https://picsum.photos/seed/brazil6/600/400',
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
                    <img src="https://picsum.photos/seed/brazil-banner/1200/500" alt="Children playing in Brazil" className="w-full h-64 object-cover"/>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-2">Other Sheeps Project</h1>
                        <p className="text-church-gold font-semibold text-xl mb-6">Parnamirim - Brazil</p>
                        
                        <div className="space-y-4 text-church-gray text-lg">
                            <p>
                                The "Other Sheeps" project is a beacon of hope in Parnamirim, Brazil, dedicated to nurturing the next generation. We provide a safe and loving environment where children from underprivileged backgrounds can receive quality education, nutritious meals, and spiritual guidance based on Christian values.
                            </p>
                        </div>
                        
                        <SectionHeader>Our Vision & Activities</SectionHeader>
                        <ul className="space-y-4 text-church-gray text-lg">
                            <ListItem icon={CheckCircleIcon}>
                                <strong>Holistic Education:</strong> We offer after-school tutoring, helping children with their homework and providing them with the tools they need to succeed academically.
                            </ListItem>
                            <ListItem icon={CheckCircleIcon}>
                                <strong>Spiritual Growth:</strong> Through fun activities, Bible stories, and worship, we introduce children to the love of Jesus, planting seeds of faith that will last a lifetime.
                            </ListItem>
                            <ListItem icon={CheckCircleIcon}>
                                <strong>A Safe Haven:</strong> For many, our center is a refuge from difficult home environments. We provide a space where they feel safe, valued, and loved.
                            </ListItem>
                             <ListItem icon={CheckCircleIcon}>
                                <strong>Community Support:</strong> We work closely with families, offering support and resources to help build a stronger, healthier community from the inside out.
                            </ListItem>
                        </ul>
                        
                        <SectionHeader>How You Can Help</SectionHeader>
                        <div className="space-y-4 text-church-gray text-lg">
                           <p>Your support allows us to continue this vital work. Through prayers and financial gifts, you can help us reach more children, provide better resources, and share the transformative power of God's love with the community of Parnamirim.</p>
                        </div>

                        <div className="mt-12 border-t pt-10">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6 text-center">Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((src, index) => (
                                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                        <img 
                                            src={src} 
                                            alt={`Brazil mission gallery image ${index + 1}`} 
                                            className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 border-t pt-10 text-center">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6">Follow Their Journey</h3>
                            <div className="flex justify-center items-center space-x-6">
                                <a href="https://www.instagram.com/outrasovelhinhas/" target="_blank" rel="noopener noreferrer" aria-label="Other Sheeps Project on Instagram" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <InstagramIcon className="h-8 w-8" />
                                </a>
                                <a href="https://outrasovelhinhas.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Other Sheeps Project Website" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <GlobeIcon className="h-8 w-8" />
                                </a>
                                <a href="https://www.youtube.com/watch?v=zoexVTktD-0" target="_blank" rel="noopener noreferrer" aria-label="Other Sheeps Project on YouTube" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <YoutubeIcon className="h-8 w-8" />
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

export default OtherSheepsMissionPage;