import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { STUDY_TOPICS } from '../../core/data/study-data';
import { TitleCasePipe } from '@angular/common';

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

  readonly topic = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return STUDY_TOPICS.find(x => x.id === id) ?? null;
  });

  setTab(tab: 'knowledge' | 'practice'): void {
    this.activeTab.set(tab);
  }
}