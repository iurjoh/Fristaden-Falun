

import React from 'react';
import { BookOpenIcon, HeartIcon, CheckCircleIcon, GlobeIcon, SaltAndLightIcon, OpenDoorsIcon, UsersIcon } from './icons';

const Beliefs: React.FC = () => {
    const handleBackToHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = 'home';
    };

    const beliefs = [
        "In one God, Creator of all, who exists eternally as Father, Son, and Holy Spirit.",
        "That the Bible is the true, reliable, and ultimate authority for our faith and life.",
        "That all people are sinners and need forgiveness and salvation.",
        "That Jesus Christ, God's Son, is the only Savior. Through His death and resurrection, He alone reconciles us to God.",
        "In the present power of the Holy Spirit, who gives gifts, empowers for supernatural life, and performs miracles, healing, and deliverance today.",
        "In water baptism as a declaration of faith and communion as the sacred meal of the new covenant.",
        "That the Church is the global body of Christ, called to spread the Gospel and engage in social work.",
        "That life is sacred from conception and that God's plans for Israel remain valid.",
        "In biblical principles, including tithing and marriage as a covenant between a man and a woman.",
        "In the return of Jesus Christ, the reality of eternal life, and God's desire for all to be saved."
    ];

    const values = [
        "We believe that God is the main character and center of everything we are and do.",
        "We want to be a united family where God's love prevails and permeates everything we are.",
        "We want to be a cross-generational and multiethnic church where exchange between age groups creates strength and added value.",
        "We want to be a center of mercy, both receiving and extending compassion.",
        "We want to see God's love at work through faith in and through us, so that we can be salt and light in our city, our country and our world."
    ];
    
    const memberCommitments = [
        "Expressing a desire to belong to Jesus Christ and sharing responsibility in our church family.",
        "Living an active Christian life, with the congregation as the primary place for spiritual growth.",
        "Caring for people within our church and in the surrounding community.",
        "Actively participating in worship services, small groups, and prayer for the congregation and its leadership.",
        "Giving generously of our time and finances, according to our ability, to support the church's function and mission.",
        "Contributing to the practical maintenance of our church, such as cleaning and gardening.",
        "Having an open heart for mission and care, and seeking to influence society with the atmosphere of God's Kingdom."
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
                        We are A Sanctuary (Fristaden): a community, not just a building. We are a multicultural church for all ages and backgrounds, focused on being a refuge for everyone in need. Our mission is to be a place where people can meet and grow in a relationship with Jesus, and to equip our members to be His disciples, positively impacting society wherever they are. You are warmly welcome!
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

                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <UsersIcon className="h-8 w-8 text-church-blue mr-3"/>
                            <h2 className="text-3xl font-bold text-church-blue font-serif">Our Commitment as Members</h2>
                        </div>
                        <ul className="space-y-4 text-church-gray text-lg">
                            {memberCommitments.map((commitment, index) => <ListItem key={index}>{commitment}</ListItem>)}
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
                                We are part of <strong className="font-semibold">Salt & Light International</strong>.. S&L is not a denomination but a family of nearly 1500 congregations located all over the world. The congregation has been related to Salt & Light on an international and national level since 2008. In Sweden, leadership days are organized every year and the congregation's leaders have participated in these days. These meetings have been a great support and encouragement for us in the congregation. The congregation Citykyrkan in Västerås, the Centrumkyrkan in Sala and Heby, the Sion congregation in Flen and the Fristaden congregation have a closer collaboration within Salt&Light Norden in what is called N.E.A.T, an abbreviation for North East Apostolic Team. The pastors in NEAT meet every month and this team is led by Pastor Mats Nordén.
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