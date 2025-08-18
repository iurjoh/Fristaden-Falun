
import React from 'react';

interface ScheduleTableProps {
    title: string;
    headers: string[];
    rows: string[][];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ title, headers, rows }) => {
    return (
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-church-blue font-serif mb-4">{title}</h2>
            {rows.length === 0 ? (
                 <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 text-center">
                    <p className="text-church-gray">No schedule information available at the moment.</p>
                </div>
            ) : (
                <div className="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
                    <table className="w-full text-left">
                        <thead className="bg-church-light-gray">
                            <tr>
                                {headers.map(header => (
                                    <th key={header} className="p-4 font-semibold text-church-gray uppercase text-sm tracking-wider">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-church-gold/5">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="p-4 text-church-gray">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};


const CommunityPage: React.FC = () => {
    const handleBackToHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#home';
    };
    
    // Static data definitions
    const servicesData = {
        headers: ["Event", "Date", "Time", "Notes"],
        rows: [
            ["Sunday Service", "Aug 18, 2024", "11:00 AM", "Guest Speaker: John Smith"],
            ["Bible Study", "Aug 21, 2024", "18:00 PM", "Studying the book of Romans"],
            ["Worship & Prayer", "Aug 21, 2024", "10:00 AM", ""],
            ["Sunday Service", "Aug 25, 2024", "11:00 AM", ""],
        ]
    };

    const riaStuganData = {
        headers: ["Date", "Team Responsible"],
        rows: [
            ["Aug 19, 2024", "Team A (Andersson Family)"],
            ["Aug 26, 2024", "Team B (Lundström Group)"],
            ["Sep 2, 2024", "Team C (Eriksson Family)"],
            ["Sep 9, 2024", "Team D (Youth Group)"],
        ]
    };
    
    const fikaData = {
        headers: ["Date", "Family/Group Responsible"],
        rows: [
            ["Aug 18, 2024", "The Persson Family"],
            ["Aug 25, 2024", "The Gustafsson Family"],
            ["Sep 1, 2024", "The Olsson Family"],
            ["Sep 8, 2024", "The Svensson Family"],
        ]
    };

    const cleaningData = {
        headers: ["Week Of", "Team Responsible"],
        rows: [
            ["Aug 19, 2024", "Group 1"],
            ["Aug 26, 2024", "Group 2"],
            ["Sep 2, 2024", "Group 3"],
            ["Sep 9, 2024", "Group 4"],
        ]
    };

    const gardeningData = {
        headers: ["Date", "Task", "Volunteers"],
        rows: [
            ["Aug 24, 2024", "Weeding front garden beds", "The Johnsons"],
            ["Sep 7, 2024", "Trimming hedges", "Erik & Anna"],
        ]
    };


    return (
        <section className="py-20 bg-church-light-gray min-h-[calc(100vh-200px)]">
            <div className="container mx-auto px-6">
                <div className="text-left mb-6">
                    <a href="#home" onClick={handleBackToHomeClick} className="text-church-blue hover:text-church-gold transition-colors duration-300 inline-block font-semibold cursor-pointer">&larr; Back to Home</a>
                </div>
                 <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-church-blue font-serif mb-4">Community Schedules</h1>
                    <p className="text-lg text-church-gray mb-12 max-w-3xl mx-auto">
                        Welcome to our community hub! Here you can find the latest schedules for various church activities. If you'd like to get involved, please contact us!
                    </p>
                </div>
                
                <ScheduleTable title="Upcoming Services & Events" headers={servicesData.headers} rows={servicesData.rows} />
                <ScheduleTable title="RIA Stugan Falun" headers={riaStuganData.headers} rows={riaStuganData.rows} />
                <ScheduleTable title="Lunch & Fika Team" headers={fikaData.headers} rows={fikaData.rows} />
                <ScheduleTable title="Church Cleaning" headers={cleaningData.headers} rows={cleaningData.rows} />
                <ScheduleTable title="Gardening" headers={gardeningData.headers} rows={gardeningData.rows} />

            </div>
        </section>
    );
};

export default CommunityPage;