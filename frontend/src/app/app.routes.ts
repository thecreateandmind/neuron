import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'chat', component: ChatRoomsComponent },
  { path: 'task/:id', component: TaskDetailComponent },
  { path: 'success', component: SuccessComponent },
];
