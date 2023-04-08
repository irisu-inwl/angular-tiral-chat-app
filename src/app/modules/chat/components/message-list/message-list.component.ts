import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: string[] = [];

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

}
