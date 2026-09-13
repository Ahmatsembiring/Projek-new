export interface JournalEditorialMember {
  role: string;
  name: string;
  institution: string;
  country?: string;
  scopusId?: string;
  orcid?: string;
}

export interface JournalIssueArticle {
  id: string;
  title: string;
  authors: string[];
  pages: string;
  doi: string;
  pdfUrl?: string;
  abstract: string;
}

export interface JournalIssue {
  volume: number;
  issue: number;
  year: number;
  month: string;
  coverImage?: string;
  articles: JournalIssueArticle[];
}

export interface Journal {
  id: string; // e.g. 'jstig', 'jsshg', 'jpspg', 'jbemg'
  acronym: string;
  name: string;
  colorName: 'blue' | 'gold' | 'teal' | 'indigo';
  badgeColor: string; // Tailwind class
  accentColor: string; // Tailwind hex or class
  focus: string;
  scope: string[];
  frequency: string;
  frequencyMonths: string[];
  minimumArticlesPerIssue: number;
  eIssn: string;
  pIssn: string;
  publisher: string;
  language: string;
  indexing: string[];
  ojsUrl: string;
  submitUrl: string;
  authorGuidelinesUrl: string;
  editorialTeam: JournalEditorialMember[];
  editorialBoardText?: string;
  authorGuidelinesSteps: string[];
  publicationEthicsPoints: string[];
  peerReviewText: string;
  currentIssue?: JournalIssue;
  archives?: JournalIssue[];
}

export type SubmissionStatusType = 
  | 'Submitted'
  | 'Under Review'
  | 'Revision Required'
  | 'Accepted'
  | 'Published'
  | 'Rejected';

export interface SubmissionTimelineStep {
  status: SubmissionStatusType;
  title: string;
  date: string;
  description: string;
  completed: boolean;
  current?: boolean;
}

export interface SubmissionTrackingResult {
  token: string;
  title: string;
  journalId: string;
  journalAcronym: string;
  journalName: string;
  authorName: string;
  submittedDate: string;
  currentStatus: SubmissionStatusType;
  currentStepIndex: number;
  statusNotes: string;
  nextAction: string;
  timeline: SubmissionTimelineStep[];
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject: string;
  journalTarget?: string;
  message: string;
}
