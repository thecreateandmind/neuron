import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {}