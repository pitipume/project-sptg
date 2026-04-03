import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { STUDY_TOPICS } from '../../core/data/study-data';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './topic-detail.component.html',
  styleUrl: './topic-detail.component.scss'
})
export class TopicDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly activeTab = signal<'knowledge' | 'practice'>('knowledge');
  readonly showAllAnswers = signal(false);
  readonly visibleAnswers = signal<Record<string, boolean>>({});

  readonly topic = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return STUDY_TOPICS.find(x => x.id === id) ?? null;
  });

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