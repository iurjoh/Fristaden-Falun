
import React from 'react';
import { QrCodeIcon, BankIcon } from './icons';

const GivePage: React.FC = () => {
    const handleBackToHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#home';
    };

    return (
        <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-6">
                <div className="text-left mb-12">
                    <a href="#home" onClick={handleBackToHomeClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block mb-6 font-semibold cursor-pointer">&larr; Back to Home</a>
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-4">Support Our Mission</h1>
                    <p className="text-lg text-church-gray mb-10">
                        Your generosity is a vital part of what we do. Every contribution helps us spread the message of hope, support our community, and maintain our shared place of worship. Thank you for your faithful giving.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-center items-center gap-3 mb-2">
                                <QrCodeIcon className="h-8 w-8 text-church-blue" />
                                <h2 className="text-2xl font-semibold text-church-gray font-serif">Swish</h2>
                            </div>
                            <p className="text-4xl font-mono text-church-blue tracking-wider bg-gray-50 p-4 rounded-lg inline-block">
                                123 188 23 23
                            </p>
                            <p className="text-sm text-gray-500 mt-2">The easiest way to give for those in Sweden.</p>
                        </div>
                        <div>
                             <div className="flex justify-center items-center gap-3 mb-2">
                                <BankIcon className="h-8 w-8 text-church-blue" />
                                <h2 className="text-2xl font-semibold text-church-gray font-serif">Bankgiro</h2>
                            </div>
                             <p className="text-4xl font-mono text-church-blue tracking-wider bg-gray-50 p-4 rounded-lg inline-block">
                                5243-9320
                            </p>
                            <p className="text-sm text-gray-500 mt-2">For transfers through your bank.</p>
                        </div>
                    </div>
                     <div className="mt-12 border-t pt-8 text-church-gray">
                        <p className="italic">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</p>
                        <p className="font-semibold mt-2">- 2 Corinthians 9:7</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GivePage;
