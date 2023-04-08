import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessagesService
  ) { }

  messageForm = this.formBuilder.group({
    newMessage: '',
  });

  ngOnInit(): void {
  }

  addMessage(): void {
    if (this.messageForm.value.newMessage) {
      const newMessage = this.messageForm.value.newMessage.trim()
      console.log(`addMessage: ${this.messageForm.value}`)
      this.messageService.addMessage(newMessage)
      this.messageForm.reset();
    }
  }
}
