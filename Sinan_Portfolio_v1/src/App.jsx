import { useEffect, useState } from 'react'
import './App.css'
import FluidContainer from './Components/FluidContainer'
import LoadingScreen from './Components/LoadingScreen'
import { ThemeProvider } from './Components/ThemeContext'
import WaterWaveBackground from './Components/WaterWaveBackground'
import About from './Pages/About'
import Achievements from './Pages/Achievements'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
import Projects from './Pages/Projects'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavClick = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };
  
  useEffect(() => {
      if (window.THREE) return;
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.async = true;
      document.head.appendChild(script);
      return () => {
           if (script.parentNode) {
              script.parentNode.removeChild(script);
          }
      }
  }, []);

  useEffect(() => {
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      setActiveSection(entry.target.id);
                  }
              });
          },
          {
              rootMargin: '-50% 0px -50% 0px',
              threshold: 0
          }
      );
      sections.forEach((section) => observer.observe(section));
      return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <ThemeProvider>
        {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}
        <div className={`w-full min-h-screen font-sans transition-opacity duration-500 bg-slate-50 dark:bg-black ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <WaterWaveBackground />
            <Header onNavClick={handleNavClick} activeSection={activeSection} />
            <FluidContainer>
                <main className="relative z-10 w-full">
                    <Hero onNavClick={handleNavClick} />
                    <About />
                    <Projects />
                    <Achievements />
                    <Contact />
                </main>
                <Footer />
            </FluidContainer>
        </div>
    </ThemeProvider>
  )
}

export default App
