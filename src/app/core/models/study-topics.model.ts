export interface PracticeQuestion {
  question: string;
  answer: string;
  difficulty: 'basic' | 'intermediate' | 'advanced' | 'hard';
}

export interface StudyTopic {
  id: string;
  title: string;
  subject: 'math' | 'physics';
  summary: string[];
  coreConcepts: string[];
  derive: string[];
  formulas: string[];
  sptgSet: PracticeQuestion[];
  hardSet: PracticeQuestion[];
}