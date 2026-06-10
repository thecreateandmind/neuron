import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-rooms',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chat-rooms.component.html',
  styleUrl: './chat-rooms.component.css'
})
export class ChatRoomsComponent {}
