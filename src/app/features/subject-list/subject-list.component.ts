import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { StudyDataService } from '../../core/services/study-data.service';
import { TopicIndexItem } from '../../core/models/topic-index.model';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly studyDataService = inject(StudyDataService);

  readonly subject = signal<'math' | 'physics'>('math');
  readonly title = signal('Math Topics');
  readonly topics = signal<TopicIndexItem[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    this.route.paramMap.subscribe(params => {
      const subjectParam = params.get('subject') === 'physics' ? 'physics' : 'math';
      this.subject.set(subjectParam);
      this.title.set(subjectParam === 'math' ? 'Math Topics' : 'Physics Topics');
      this.loadTopics();
    });
  }

  private loadTopics(): void {
    this.loading.set(true);
    this.error.set('');

    this.studyDataService.getIndex().subscribe({
      next: (index) => {
        const items = this.subject() === 'math' ? index.math : index.physics;
        this.topics.set(items);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load index.json', err);
        this.error.set(`Failed to load topics. ${err?.status ?? ''} ${err?.statusText ?? ''}`);
        this.loading.set(false);
      }
    });
  }
}