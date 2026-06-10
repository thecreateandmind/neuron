import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TaskDetailComponent {}