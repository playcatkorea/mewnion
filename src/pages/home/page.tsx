
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import FurniverseSection from './components/FurniverseSection';
import FurniverseMapSection from './components/FurniverseMapSection';
import PlayFactorySection from './components/PlayFactorySection';
import MewtlerSection from './components/MewtlerSection';
import ShelterSection from './components/ShelterSection';
import BrandSection from './components/BrandSection';
import CreatorsSection from './components/CreatorsSection';
import CatLifeSection from './components/CatLifeSection';
import DAOSection from './components/DAOSection';
import ContactSection from './components/ContactSection';
import HomeCatRoomPreview from './components/HomeCatRoomPreview';
import { useAuth } from '../../context/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <FurniverseSection />
        {isAuthenticated && <HomeCatRoomPreview />}
        <FurniverseMapSection />
        <PlayFactorySection />
        <MewtlerSection />
        <ShelterSection />
        <BrandSection />
        <CreatorsSection />
        <CatLifeSection />
        <DAOSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
