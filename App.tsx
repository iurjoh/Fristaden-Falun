

import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Sermons from './components/Sermons';
import Give from './components/Give';
import Volunteer from './components/Volunteer';
import NewHere from './components/NewHere';
import Beliefs from './components/Beliefs';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ServicePage from './components/events/ServicePage';
import BibleStudyPage from './components/events/BibleStudyPage';
import WorshipPrayerPage from './components/events/WorshipPrayerPage';
import GivePage from './components/GivePage';
import VolunteerPage from './components/VolunteerPage';
import Missions from './components/Missions';
import MissionsPage from './components/MissionsPage';
import IndiaMissionPage from './components/missions/IndiaMissionPage';
import OtherSheepsMissionPage from './components/missions/OtherSheepsMissionPage';
import EritreiaMissionPage from './components/missions/EritreiaMissionPage';

const App: React.FC = () => {
  const getPageFromHash = (hash: string) => {
    if (hash.startsWith('#event/')) return 'event-detail';
    if (hash.startsWith('#mission/')) return 'mission-detail';
    if (hash === '#plan-visit') return 'plan-visit';
    if (hash === '#beliefs') return 'beliefs';
    if (hash === '#login') return 'login';
    if (hash === '#signup') return 'signup';
    if (hash === '#give-page') return 'give-page';
    if (hash === '#volunteer-page') return 'volunteer-page';
    if (hash === '#missions-page') return 'missions-page';
    return 'home';
  };
  
  const getSlugFromHash = (hash: string) => {
    if (hash.startsWith('#event/')) return hash.substring('#event/'.length);
    if (hash.startsWith('#mission/')) return hash.substring('#mission/'.length);
    return null;
  }

  const [locationHash, setLocationHash] = useState(window.location.hash);
  const [currentPage, setCurrentPage] = useState(getPageFromHash(window.location.hash));
  const [pageSlug, setPageSlug] = useState(getSlugFromHash(window.location.hash));
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      setCurrentPage(getPageFromHash(newHash));
      setLocationHash(newHash);
      setPageSlug(getSlugFromHash(newHash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  useEffect(() => {
    if (currentPage === 'home') {
        if (locationHash && locationHash !== '#home' && locationHash !== '#') {
            setTimeout(() => {
                const element = document.getElementById(locationHash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Focus management for screen readers on page change
        setTimeout(() => mainRef.current?.focus(), 100);
    }
  }, [currentPage, locationHash]);

  const HomePageContent = () => (
    <>
      <Hero />
      <div id="about">
          <About />
      </div>
      <div id="events">
          <Events />
      </div>
      <div id="sermons">
          <Sermons />
      </div>
      <div id="give">
          <Give />
      </div>
      <div id="volunteer">
          <Volunteer />
      </div>
      <div id="missions">
          <Missions />
      </div>
    </>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'plan-visit':
        return <NewHere />;
      case 'beliefs':
        return <Beliefs />;
      case 'login':
        return <Login />;
      case 'signup':
        return <SignUp />;
      case 'give-page':
        return <GivePage />;
      case 'volunteer-page':
        return <VolunteerPage />;
      case 'missions-page':
        return <MissionsPage />;
      case 'mission-detail':
        switch (pageSlug) {
            case 'india': return <IndiaMissionPage />;
            case 'other-sheeps': return <OtherSheepsMissionPage />;
            case 'eritreia': return <EritreiaMissionPage />;
            default: return <MissionsPage />; // Fallback
        }
      case 'event-detail':
        switch (pageSlug) {
            case 'service': return <ServicePage />;
            case 'bible-study': return <BibleStudyPage />;
            case 'worship-prayer': return <WorshipPrayerPage />;
            default: return <HomePageContent />; // Fallback to home if slug is unknown
        }
      default:
        return <HomePageContent />;
    }
  };

  return (
    <div className="bg-church-white text-church-gray font-sans">
      <Header />
      <main ref={mainRef} tabIndex={-1} className="outline-none focus:ring-0">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;