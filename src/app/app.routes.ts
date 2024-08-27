import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';

export const routes: Routes = [
    { path: "accueil", component: TaskListComponent }, { path: "accueil", component: TaskListComponent },
    { path: 'sommaire', component: TaskSummaryComponent },
    { path: "", redirectTo: "accueil", pathMatch: 'full' },
];
