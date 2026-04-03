import { Component, inject, signal } from '@angular/core';
import { MockReviewService } from '../../core/services/mock-review.service';
import { AnalyzeMockStrategy, MockAnswers } from '../../core/models/mock-review.model';

@Component({
  selector: 'app-mock-review',
  standalone: true,
  templateUrl: './mock-review.component.html',
  styleUrl: './mock-review.component.scss'
})
export class MockReviewComponent {
  private readonly mockReviewService = inject(MockReviewService);

  readonly strategy = signal<AnalyzeMockStrategy | null>(null);
  readonly answers = signal<MockAnswers | null>(null);
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    this.loading.set(true);
    this.error.set('');

    this.mockReviewService.getStrategy().subscribe({
      next: (strategyData) => {
        this.strategy.set(strategyData);

        this.mockReviewService.getAnswers().subscribe({
          next: (answerData) => {
            this.answers.set(answerData);
            this.loading.set(false);
          },
          error: () => {
            this.error.set('Failed to load mock answers.');
            this.loading.set(false);
          }
        });
      },
      error: () => {
        this.error.set('Failed to load analysis strategy.');
        this.loading.set(false);
      }
    });
  }
}