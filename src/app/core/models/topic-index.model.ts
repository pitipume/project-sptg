export interface TopicIndexItem {
  id: string;
  title: string;
  subject: 'math' | 'physics';
  summary: string;
}

export interface TopicIndex {
  math: TopicIndexItem[];
  physics: TopicIndexItem[];
}