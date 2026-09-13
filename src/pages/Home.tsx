import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ValueSection } from '../components/ValueSection';
import { JournalSection } from '../components/JournalSection';
import { WhyGarudaya } from '../components/WhyGarudaya';
import { PublicationTimeline } from '../components/PublicationTimeline';
import { CTASection } from '../components/CTASection';

interface HomeProps {
  onOpenSubmitModal: (journalId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenSubmitModal }) => {
  useEffect(() => {
    document.title = 'Garudaya | Jurnal Ilmiah dan Publikasi Riset';
  }, []);

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero onOpenSubmitModal={() => onOpenSubmitModal()} />

      {/* 2. Trust / Value Section (Kolaborasi, Inovasi, Ilmu, Berdampak) */}
      <ValueSection />

      {/* 3. Our Journals (4 Journal Cards) */}
      <JournalSection onOpenSubmitModal={onOpenSubmitModal} />

      {/* 4. Why Garudaya? (Multidisciplinary, Quality Research, Academic Collaboration, Open Knowledge) */}
      <WhyGarudaya />

      {/* 5. Publication Process (Submit, Review, Revision, Decision, Publication) */}
      <PublicationTimeline isFullPage={false} />

      {/* 6. Call to Action */}
      <CTASection onOpenSubmitModal={() => onOpenSubmitModal()} />
    </main>
  );
};
