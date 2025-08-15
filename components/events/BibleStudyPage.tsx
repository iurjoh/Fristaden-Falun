import React from 'react';

const BibleStudyPage: React.FC = () => {
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
                    <img src="https://picsum.photos/1200/500?random=21" alt="Bible Study Group" className="w-full h-64 object-cover"/>
                    <div className="p-8 md:p-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-2">Wednesday Bible Study</h1>
                        <p className="text-church-gold font-semibold mb-6">Every Wednesday at 18:00 PM</p>
                        
                        <div className="prose prose-lg max-w-none text-church-gray">
                            <p>
                                Deepen your understanding of God's Word at our weekly Bible Study. This is a fantastic opportunity for both new believers and seasoned Christians to dive into the scriptures, ask questions, and discuss truths in a friendly, small-group setting.
                            </p>
                            <p>
                                Each week, we explore different books of the Bible, theological topics, and practical applications for our faith. Our study is interactive, encouraging open discussion and personal reflection. It's a place to learn, grow, and build meaningful relationships with others who are passionate about their faith.
                            </p>
                             <p>
                                Whether you've been reading the Bible for years or are just starting, you are welcome here. Come and join the conversation!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BibleStudyPage;