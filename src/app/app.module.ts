import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageListComponent } from './modules/chat/components/message-list/message-list.component';
import { MessageInputComponent } from './modules/chat/components/message-input/message-input.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
