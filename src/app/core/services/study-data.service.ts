import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopicIndex } from '../models/topic-index.model';
import { StudyTopic } from '../models/study-topics.model';


@Injectable({
  providedIn: 'root'
})
export class StudyDataService {
  private readonly http = inject(HttpClient);

  getIndex(): Observable<TopicIndex> {
    return this.http.get<TopicIndex>('assets/data/index.json');
  }

  getTopic(subject: 'math' | 'physics', topicId: string): Observable<StudyTopic> {
    return this.http.get<StudyTopic>(`assets/data/${subject}/${topicId}.json`);
  }
}