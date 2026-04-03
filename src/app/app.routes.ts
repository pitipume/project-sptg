import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
        import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'subject/:subject',
        loadComponent: () =>
        import('./features/subject-list/subject-list.component').then(m => m.SubjectListComponent)
    },
    {
        path: 'subject/:subject/topic/:id',
        loadComponent: () =>
        import('./features/topic-detail/topic-detail.component').then(m => m.TopicDetailComponent)
    },
    {
        path: 'mock-review',
        loadComponent: () =>
        import('./features/mock-review/mock-review.component').then(m => m.MockReviewComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
