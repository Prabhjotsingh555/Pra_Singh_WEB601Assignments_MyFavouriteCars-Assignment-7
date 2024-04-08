import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesServiceService } from '../messages-service.service';

@Component({
  selector: 'app-content-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-message.component.html',
  styleUrl: './content-message.component.scss'
})
export class ContentMessageComponent implements OnInit {
  messages: string[] = [];

  constructor(private messagesService: MessagesServiceService) {}

  ngOnInit(): void {
    this.messagesService.messages.subscribe((message) => {
      this.messages.push(message);
    })
  }
}
