import React from 'react';

const ServicePage: React.FC = () => {
    const handleBackToHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#home';
    };

    const handlePlanVisitClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = 'plan-visit';
    };

    return (
        <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-6">
                <div className="text-left mb-12">
                    <a href="#home" onClick={handleBackToHomeClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block mb-6 font-semibold cursor-pointer">&larr; Back to Home</a>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <img src="https://picsum.photos/1200/500?random=20" alt="Sunday Service" className="w-full h-64 object-cover"/>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-2">Sunday Service</h1>
                        <p className="text-church-gold font-semibold mb-6">Every Sunday at 11:00 AM</p>
                        
                        <div className="prose prose-lg max-w-none text-church-gray">
                            <p>
                                Join us every Sunday for a time of uplifting worship, inspiring teaching, and warm fellowship. Our service is a place where people from all walks of life can come together to encounter God in a real and personal way.
                            </p>
                            <p>
                                We begin with contemporary worship music led by our talented band, creating an atmosphere of praise and adoration. This is followed by a practical, Bible-based message from our pastor that is relevant to your daily life. We believe the Word of God has the power to transform lives, and our goal is to present its timeless truths in a clear and engaging manner.
                            </p>
                            <p>
                                Children's ministry is available, providing a safe and fun environment for your kids to learn about Jesus on their level. After the service, we invite you to stay for coffee and connect with others. We can't wait to welcome you!
                            </p>
                        </div>

                         <div className="mt-10 text-center">
                            <a 
                                href="#plan-visit"
                                onClick={handlePlanVisitClick}
                                className="bg-church-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-church-blue transition-all duration-300 transform hover:scale-105 inline-block cursor-pointer"
                            >
                                Plan Your Visit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicePage;