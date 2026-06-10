import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SuccessComponent {}