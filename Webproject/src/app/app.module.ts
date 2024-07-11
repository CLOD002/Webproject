import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BoardHeaderComponent } from './components/boards/board-header/board-header.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { BoardViewComponent } from './components/boards/board-view/board-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardTemplateComponent } from './components/boards/backlog-items-board/backlog-items-board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { FeatureBoardComponent } from './components/boards/feature-board/feature-board.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardHeaderComponent,
    MenuComponent,
    BoardViewComponent,
    BoardTemplateComponent,
    FeatureBoardComponent,
    LoginComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
