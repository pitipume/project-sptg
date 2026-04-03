import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { STUDY_TOPICS } from '../../core/data/study-data';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.scss'
})
export class SubjectListComponent {
  private readonly route = inject(ActivatedRoute);

  readonly subject = computed(() => {
    const value = this.route.snapshot.paramMap.get('subject');
    return value === 'physics' ? 'physics' : 'math';
  });

  readonly title = computed(() => this.subject() === 'math' ? 'Math Topics' : 'Physics Topics');

  readonly topics = computed(() =>
    STUDY_TOPICS.filter(topic => topic.subject === this.subject())
  );
}