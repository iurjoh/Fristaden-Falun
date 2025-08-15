import React from 'react';

const WorshipPrayerPage: React.FC = () => {
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

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <img src="https://picsum.photos/1200/500?random=22" alt="Worship and Prayer" className="w-full h-64 object-cover"/>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-2">Worship & Prayer Meeting</h1>
                        <p className="text-church-gold font-semibold mb-6">Every Wednesday at 10:00 AM</p>
                        
                        <div className="prose prose-lg max-w-none text-church-gray">
                            <p>
                                Join us for a midweek moment of peace, reflection, and connection with God. Our Worship & Prayer meeting is an intimate gathering designed to refresh your spirit and center your heart on Christ through music and prayer.
                            </p>
                            <p>
                                This is a more stripped-back, acoustic setting compared to our Sunday service, allowing for personal encounters with the Holy Spirit. We spend time in worship, share testimonies of God's faithfulness, and lift up the needs of our church, our community, and the world in prayer.
                            </p>
                            <p>
                                If you are in need of prayer or simply want a quiet space to connect with God during your week, this gathering is for you. All are welcome to come and seek the Lord with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorshipPrayerPage;