import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnalyzeMockStrategy, MockAnswers } from '../models/mock-review.model';

@Injectable({
  providedIn: 'root'
})
export class MockReviewService {
  private readonly http = inject(HttpClient);

  getStrategy(): Observable<AnalyzeMockStrategy> {
    return this.http.get<AnalyzeMockStrategy>('assets/data/mock/analyze-mock-strategy.json');
  }

  getAnswers(): Observable<MockAnswers> {
    return this.http.get<MockAnswers>('assets/data/mock/mock-answers.json');
  }
}