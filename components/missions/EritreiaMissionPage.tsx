
import React from 'react';
import { CheckCircleIcon, HeartIcon } from '../icons';

const EritreiaMissionPage: React.FC = () => {
    const handleBackToMissionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#missions-page';
    };

    const galleryImages = [
        'https://picsum.photos/seed/eritrea1/600/400',
        'https://picsum.photos/seed/eritrea2/600/400',
        'https://picsum.photos/seed/eritrea3/600/400',
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
                    <img src="https://picsum.photos/seed/eritrea-banner/1200/500" alt="Light shining in darkness" className="w-full h-64 object-cover"/>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-2">Underground Church Support</h1>
                        <p className="text-church-gold font-semibold text-xl mb-6">Eritrea</p>
                        
                        <div className="space-y-4 text-church-gray text-lg">
                            <p>
                               In Eritrea, our brothers and sisters in Christ face severe persecution for their faith. We are committed to standing with the underground church, providing a lifeline of support to those who must worship in secret. Our mission is to ensure they know they are not forgotten and to empower them to remain a beacon of light in a challenging land.
                            </p>
                        </div>
                        
                        <SectionHeader>Our Commitment</SectionHeader>
                        <ul className="space-y-4 text-church-gray text-lg">
                            <ListItem icon={HeartIcon}>
                                <strong>Steadfast Prayer:</strong> We mobilize continuous prayer support, lifting up the needs of Eritrean believers, for their protection, strength, and for the growth of the church.
                            </ListItem>
                            <ListItem icon={CheckCircleIcon}>
                                <strong>Essential Resources:</strong> We discreetly provide financial support and resources, such as Bibles and discipleship materials, to pastors and house church leaders.
                            </ListItem>
                             <ListItem icon={CheckCircleIcon}>
                                <strong>Encouragement and Hope:</strong> Through secure channels, we send messages of hope and solidarity, reminding them they are part of a global family of believers who stand with them.
                            </ListItem>
                        </ul>
                        
                        <SectionHeader>A Call to Prayer</SectionHeader>
                        <div className="space-y-4 text-church-gray text-lg">
                           <p>The most powerful tool we have is prayer. We ask you to join us in praying for the persecuted church in Eritrea—for their safety, for their boldness in witness, and for God's kingdom to advance despite the opposition.</p>
                        </div>

                        <div className="mt-12 border-t pt-10">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6 text-center">Gallery of Hope</h3>
                             <p className="text-center text-church-gray mb-6">These images represent the spirit of resilience and faith we support.</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {galleryImages.map((src, index) => (
                                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                                        <img 
                                            src={src} 
                                            alt={`Eritrea mission gallery image ${index + 1}`} 
                                            className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                         <div className="mt-12 border-t pt-10 text-center">
                            <h3 className="text-3xl font-bold text-church-blue font-serif mb-6">How to Get Involved</h3>
                            <p className="text-church-gray max-w-2xl mx-auto">
                               Due to the sensitive nature of this mission, we do not share public links or specific details online. If you feel led to support this vital work financially or want to learn more about how to pray effectively, please speak with our leadership team directly or contact us at <a href="mailto:info@fristadenfalun.se" className="text-church-gold hover:underline">info@fristadenfalun.se</a>.
                            </p>
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

export default EritreiaMissionPage;
