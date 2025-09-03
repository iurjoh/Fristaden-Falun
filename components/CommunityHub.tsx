

import React from 'react';
import { CoffeeIcon, LeafIcon, SparklesIcon, UsersIcon } from './icons';

const scheduleItemsConfig = [
    {
        icon: UsersIcon,
        title: "Hela Människan i Falun",
        nextUp: "Next up: Team A",
    },
    {
        icon: CoffeeIcon,
        title: "Lunch & Fika Team",
        nextUp: "Next up: Family Persson",
    },
    {
        icon: SparklesIcon,
        title: "Church Cleaning",
        nextUp: "Next up: Group 1",
    },
    {
        icon: LeafIcon,
        title: "Gardening",
        nextUp: "Next up: The Johnsons",
    },
];


const ScheduleItem: React.FC<{ item: typeof scheduleItemsConfig[0] }> = ({ item }) => {
    return (
        <div className="bg-church-gray/50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
                <item.icon className="h-10 w-10 text-church-gold" />
            </div>
            <h3 className="text-xl font-semibold font-serif text-white mb-2">{item.title}</h3>
            <p className="text-church-light-gray/70 h-6">{item.nextUp}</p>
        </div>
    );
};

const CommunityHub: React.FC = () => {
    const handleViewSchedulesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.location.hash = '#community-page';
    };

  return (
    <section className="py-20 bg-church-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Community Hub</h2>
        <p className="text-lg text-church-light-gray/80 mb-12 max-w-2xl mx-auto">
          Find the latest schedules for church activities and see where you can help.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {scheduleItemsConfig.map(item => (
                <ScheduleItem key={item.title} item={item} />
            ))}
        </div>
        <a 
            href="#community-page"
            onClick={handleViewSchedulesClick}
            className="bg-church-gold text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-church-gold transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          View All Schedules
        </a>
      </div>
    </section>
  );
};

export default CommunityHub;