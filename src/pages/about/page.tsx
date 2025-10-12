
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import VisionSection from './components/VisionSection';
import TimelineSection from './components/TimelineSection';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';

export default function About() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full pt-16 lg:pt-18">
        <HeroSection />
        <StorySection />
        <VisionSection />
        <TimelineSection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
