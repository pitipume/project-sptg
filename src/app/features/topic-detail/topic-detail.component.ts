import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { StudyDataService } from '../../core/services/study-data.service';
import { StudyTopic } from '../../core/models/study-topics.model';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './topic-detail.component.html',
  styleUrl: './topic-detail.component.scss'
})
export class TopicDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly studyDataService = inject(StudyDataService);

  readonly activeTab = signal<'knowledge' | 'practice'>('knowledge');
  readonly showAllAnswers = signal(false);
  readonly visibleAnswers = signal<Record<string, boolean>>({});
  readonly topic = signal<StudyTopic | null>(null);
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    this.loadTopic();
  }

  private loadTopic(): void {
    const subjectParam = this.route.snapshot.paramMap.get('subject');
    const topicId = this.route.snapshot.paramMap.get('id');

    const subject = subjectParam === 'physics' ? 'physics' : 'math';

    if (!topicId) {
      this.error.set('Topic not found.');
      this.loading.set(false);
      return;
    }

    this.studyDataService.getTopic(subject, topicId).subscribe({
      next: (data) => {
        this.topic.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load topic.');
        this.loading.set(false);
      }
    });
  }

  setTab(tab: 'knowledge' | 'practice'): void {
    this.activeTab.set(tab);
  }

  toggleAnswer(key: string): void {
    const current = this.visibleAnswers();
    this.visibleAnswers.set({
      ...current,
      [key]: !current[key]
    });
  }

  isAnswerVisible(key: string): boolean {
    return !!this.visibleAnswers()[key] || this.showAllAnswers();
  }

  toggleShowAllAnswers(): void {
    this.showAllAnswers.set(!this.showAllAnswers());
  }
}