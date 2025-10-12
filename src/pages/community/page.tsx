
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CommunityHero from './components/CommunityHero';
import FeedSection from './components/FeedSection';
import TrendingSection from './components/TrendingSection';
import CommunityStats from './components/CommunityStats';
import CreatePostModal from './components/CreatePostModal';
import { useState } from 'react';

export default function Community() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50">
      <Header />
      <main className="w-full pt-16 lg:pt-18">
        <CommunityHero onCreatePost={() => setIsCreateModalOpen(true)} />
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-3">
              <FeedSection />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <CommunityStats />
              <TrendingSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Create Post Modal */}
      {isCreateModalOpen && (
        <CreatePostModal onClose={() => setIsCreateModalOpen(false)} />
      )}
    </div>
  );
}
