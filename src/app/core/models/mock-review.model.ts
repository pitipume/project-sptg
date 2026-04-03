export interface MockAnswerItem {
  no: number;
  topic: string;
  answer: string;
}

export interface MockAnswers {
  id: string;
  title: string;
  math: MockAnswerItem[];
  physics: MockAnswerItem[];
}

export interface StrategyItem {
  name?: string;
  type?: string;
  description?: string;
  examples?: string[];
  fix: string[];
}

export interface StrategySection {
  title: string;
  items: StrategyItem[];
}

export interface AnalyzeMockStrategy {
  id: string;
  title: string;
  sections: StrategySection[];
}