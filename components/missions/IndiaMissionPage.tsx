

import React from 'react';
import { CheckCircleIcon, HeartIcon, FacebookIcon, GlobeIcon } from '../icons';

const IndiaMissionPage: React.FC = () => {
    const handleBackToMissionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#missions-page';
    };

    const galleryImages = [
        'https://picsum.photos/seed/india1/600/400',
        'https://picsum.photos/seed/india2/600/400',
        'https://picsum.photos/seed/india3/600/400',
        'https://picsum.photos/seed/india4/600/400',
        'https://picsum.photos/seed/india5/600/400',
        'https://picsum.photos/seed/india6/600/400',
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
                    <img src="https://picsum.photos/seed/india-banner/1200/500" alt="Hopeful children in India" className="w-full h-64 object-cover"/>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-2">Fristadens Mercy Center – Transforming Lives Together</h1>
                        <p className="text-church-gold font-semibold text-xl mb-6">17 Years of Hope and Compassion!</p>
                        
                        <div className="space-y-4 text-church-gray text-lg">
                            <p>Dear Friends and Supporters,</p>
                            <p>
                                17 years ago, we began a journey of love and solidarity through the Fristadens Barmhärtighetscenter. Thanks to your support, more than 15,000 people have received free medical care at our medical camps, and hundreds of children and young people have had their lives transformed.
                            </p>
                        </div>
                        
                        <SectionHeader>What your support has already achieved:</SectionHeader>
                        <ul className="space-y-4 text-church-gray text-lg">
                            <ListItem icon={CheckCircleIcon}>
                                <strong>Education that transforms:</strong> Orphaned or vulnerable children have been able to attend school through our sponsorship program. Some have even graduated from university!
                            </ListItem>
                            <ListItem icon={CheckCircleIcon}>
                                <strong>Support for Widows:</strong> Many widowed mothers, facing extreme hardship in India, receive monthly support to care for their families.
                            </ListItem>
                            <ListItem icon={CheckCircleIcon}>
                                <strong>Health for those most in need:</strong> Our medical camps bring free medical care to underprivileged communities.
                            </ListItem>
                             <ListItem icon={CheckCircleIcon}>
                                <strong>A Home for Children:</strong> Every quarter, we support an orphanage with 55 children, providing food, maintenance, and even toys.
                            </ListItem>
                        </ul>
                        
                        <SectionHeader>2024: New Missions, More Impact</SectionHeader>
                        <div className="space-y-4 text-church-gray text-lg">
                            <p>This year, we're planning two trips to India to:</p>
                        </div>
                        <ul className="space-y-4 text-church-gray text-lg mt-4">
                            <ListItem icon={HeartIcon}>
                                Hold new medical camps and save more lives.
                            </ListItem>
                            <ListItem icon={HeartIcon}>
                                Visit the children, young people, and widows we support, bringing hope and care.
                            </ListItem>
                        </ul>

                        <div className="space-y-4 text-church-gray text-lg mt-8">
                           <p><strong>You make a difference!</strong> None of this would be possible without your generosity. Every donation, every gesture of support, changes real stories.</p>
                        </div>

                        <SectionHeader>Want to get even more involved?</SectionHeader>
                        <div className="space-y-4 text-church-gray text-lg">
                           <p>Come with us to India and experience the impact of your love firsthand! Together, we will continue to write stories of hope.</p>
                        </div>

                        <div className="mt-12 border-t pt-10">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6 text-center">Gallery</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((src, index) => (
                                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                        <img 
                                            src={src} 
                                            alt={`India mission gallery image ${index + 1}`} 
                                            className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 border-t pt-10 text-center">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6">Follow Their Journey</h3>
                            <div className="flex justify-center items-center space-x-6">
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Fristadens Mercy Center on Facebook" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <FacebookIcon className="h-8 w-8" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Fristadens Mercy Center Website" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <GlobeIcon className="h-8 w-8" />
                                </a>
                                <a href="#give-page" onClick={(e) => { e.preventDefault(); window.location.hash = 'give-page';}} aria-label="Support our India Mission" className="text-church-gray hover:text-church-gold transition-colors duration-300">
                                    <HeartIcon className="h-8 w-8" />
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

export default IndiaMissionPage;