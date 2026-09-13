import { JOURNALS_DATA, getJournalById } from '../data/journals';
import { Journal } from '../types/journal';

/**
 * Service abstraction for Journal operations.
 * When integrating with an OJS REST API or backend gateway,
 * swap the mock implementations below with fetch(`/api/journals/...`).
 */
export const journalService = {
  /**
   * Fetch all Garudaya journals
   */
  async getAllJournals(): Promise<Journal[]> {
    // Simulated network latency
    return new Promise((resolve) => {
      setTimeout(() => resolve(JOURNALS_DATA), 100);
    });
  },

  /**
   * Fetch single journal details by ID (e.g. 'jstig', 'jsshg', etc.)
   */
  async getJournalById(id: string): Promise<Journal | null> {
    return new Promise((resolve) => {
      const found = getJournalById(id);
      setTimeout(() => resolve(found || null), 80);
    });
  },

  /**
   * Search journals by keyword in name, focus, or scope
   */
  async searchJournals(query: string): Promise<Journal[]> {
    const q = query.toLowerCase().trim();
    if (!q) return JOURNALS_DATA;
    return JOURNALS_DATA.filter(
      (j) =>
        j.name.toLowerCase().includes(q) ||
        j.acronym.toLowerCase().includes(q) ||
        j.focus.toLowerCase().includes(q) ||
        j.scope.some((s) => s.toLowerCase().includes(q))
    );
  },
};
