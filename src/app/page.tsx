import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import Register from './components/sections/Register'
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <AboutSection /> 
      <Register />
      <Footer />
    </main>
  );
}
