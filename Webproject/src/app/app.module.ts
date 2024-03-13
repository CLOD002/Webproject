import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BoardHeaderComponent } from './components/board-header/board-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
