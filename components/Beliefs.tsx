

import React from 'react';
import { BookOpenIcon, HeartIcon, CheckCircleIcon, GlobeIcon, SaltAndLightIcon, OpenDoorsIcon } from './icons';

const Beliefs: React.FC = () => {
    const handleBackToHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = 'home';
    };

    const beliefs = [
        "That God created heaven and earth, and that he created man in his image. We believe in God the Father, God the Son and God the Holy Spirit.",
        "That Jesus Christ is the Son of God and the Savior of the world, who through his death on the cross and resurrection has reconciled us with God. We believe that Jesus is the only way to God, and that it is only in faith in Him that a person can receive forgiveness of sins and be saved.",
        "That the Holy Spirit is present on earth as our helper. We believe in the gifts of the Holy Spirit. We believe that there is a supernatural charismatic life for all who believe. We believe in wonders and miracles as an answer to prayer, which means that people can be healed and delivered today.",
        "That the Bible is the word of God, true and reliable. The Bible is our highest authority.",
        "That life is eternal and that God wants all people to be saved.",
        "That the church is the body of Christ on earth.",
        "That Jesus will return."
    ];

    const values = [
        "We believe that God is the main character and center of everything we are and do.",
        "We want to be a family where God's love prevails and permeates everything we are.",
        "We want to be a cross-generational church where exchange between age groups creates strength and added value.",
        "We want to be a place of mercy and a place for mercy, a mercy center.",
        "We want to see God's love at work through faith in and through us, so that we can be salt and light in our city, our country and our world."
    ];

    const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <li className="flex items-start">
            <CheckCircleIcon className="h-6 w-6 text-church-gold mr-3 mt-1 shrink-0" />
            <span>{children}</span>
        </li>
    );

    return (
        <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <a href="#home" onClick={handleBackToHomeClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block mb-6 font-semibold cursor-pointer">&larr; Back to Home</a>
                    <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif">Our Beliefs and Values</h1>
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <p className="text-lg text-center text-church-gray mb-10 italic">
                        The church is not a building but first and foremost a community of people. We are a multicultural church with people of all ages. Our focus is to be a refuge for all people who need it. You are warmly welcome to our church!
                    </p>
                    
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <BookOpenIcon className="h-8 w-8 text-church-blue mr-3"/>
                            <h2 className="text-3xl font-bold text-church-blue font-serif">We Believe</h2>
                        </div>
                        <ul className="space-y-4 text-church-gray text-lg">
                            {beliefs.map((belief, index) => <ListItem key={index}>{belief}</ListItem>)}
                        </ul>
                    </div>
                    
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <HeartIcon className="h-8 w-8 text-church-blue mr-3"/>
                            <h2 className="text-3xl font-bold text-church-blue font-serif">Our Values</h2>
                        </div>
                        <ul className="space-y-4 text-church-gray text-lg">
                            {values.map((value, index) => <ListItem key={index}>{value}</ListItem>)}
                        </ul>
                    </div>

                    <div className="border-t pt-10">
                        <div className="flex items-center justify-center mb-6">
                            <SaltAndLightIcon className="h-8 w-8 text-church-blue mr-3"/>
                            <h2 className="text-3xl font-bold text-church-blue font-serif">Our Global Family</h2>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <img 
                                    src="https://picsum.photos/seed/saltandlight/300/150" 
                                    alt="Salt & Light International Logo Placeholder" 
                                    className="rounded-lg shadow-md max-w-[300px] w-full object-contain"
                                />
                            </div>
                            <p className="text-church-gray text-lg max-w-2xl mx-auto">
                                We are a part of <strong className="font-semibold">Salt & Light International</strong>. Salt & Light is an international family of churches and leaders, across Africa, Asia, Europe and the Americas.
                            </p>
                            <div className="mt-6">
                                <a 
                                    href="https://www.saltlight.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-church-blue text-white px-6 py-3 rounded-full hover:bg-church-gold transition-colors duration-300 font-semibold"
                                >
                                    <GlobeIcon className="h-5 w-5 mr-2" />
                                    Visit Salt & Light Website
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-10 mt-12">
                        <div className="flex items-center justify-center mb-6">
                            <OpenDoorsIcon className="h-8 w-8 text-church-blue mr-3"/>
                            <h2 className="text-3xl font-bold text-church-blue font-serif">Standing with the Persecuted</h2>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <img 
                                    src="https://picsum.photos/seed/opendoors/300/150" 
                                    alt="Open Doors Logo Placeholder" 
                                    className="rounded-lg shadow-md max-w-[300px] w-full object-contain"
                                />
                            </div>
                            <p className="text-church-gray text-lg max-w-2xl mx-auto">
                                We also stand in solidarity with persecuted Christians around the world through our support for <strong className="font-semibold">Open Doors</strong>. Open Doors is a global ministry that serves Christians who are persecuted for their faith, providing Bibles, training, and practical support.
                            </p>
                            <div className="mt-6">
                                <a 
                                    href="https://www.opendoors.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-church-blue text-white px-6 py-3 rounded-full hover:bg-church-gold transition-colors duration-300 font-semibold"
                                >
                                    <GlobeIcon className="h-5 w-5 mr-2" />
                                    Visit Open Doors Website
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Beliefs;