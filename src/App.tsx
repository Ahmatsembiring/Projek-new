/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SubmitModal } from './components/SubmitModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Journals } from './pages/Journals';
import { JournalDetail } from './pages/JournalDetail';
import { Publication } from './pages/Publication';
import { TrackSubmission } from './pages/TrackSubmission';
import { Contact } from './pages/Contact';

// Scroll to top helper on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [preselectedJournal, setPreselectedJournal] = useState<string | undefined>(undefined);

  const handleOpenSubmitModal = (journalId?: string) => {
    setPreselectedJournal(journalId);
    setSubmitModalOpen(true);
  };

  const handleCloseSubmitModal = () => {
    setSubmitModalOpen(false);
    setPreselectedJournal(undefined);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-slate-900">
        {/* Sticky Header */}
        <Navbar onOpenSubmitModal={handleOpenSubmitModal} />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenSubmitModal={handleOpenSubmitModal} />} />
            <Route path="/about" element={<About onOpenSubmitModal={handleOpenSubmitModal} />} />
            <Route path="/journals" element={<Journals onOpenSubmitModal={handleOpenSubmitModal} />} />
            <Route
              path="/journals/:journalId"
              element={<JournalDetail onOpenSubmitModal={handleOpenSubmitModal} />}
            />
            <Route
              path="/publication"
              element={<Publication onOpenSubmitModal={handleOpenSubmitModal} />}
            />
            <Route path="/track-submission" element={<TrackSubmission />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home onOpenSubmitModal={handleOpenSubmitModal} />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Modal for OJS Submission */}
        <SubmitModal
          isOpen={submitModalOpen}
          onClose={handleCloseSubmitModal}
          preselectedJournalId={preselectedJournal}
        />
      </div>
    </Router>
  );
}
