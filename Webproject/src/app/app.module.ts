import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { provideRouter } from '@angular/router';
import {routes} from './app-routing.module'
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './components/menu/menu.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardTemplateComponent } from './components/boards/backlog-items-board/backlog-items-board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { FeatureBoardComponent } from './components/boards/feature-board/feature-board.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OverviewComponent } from './components/overview/overview/overview.component';
import { WorkitemComponent } from './components/boards/workitem/workitem.component';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MenuComponent,
    BoardTemplateComponent,
    FeatureBoardComponent,
    LoginComponent,
    ProfileComponent,
    OverviewComponent,
    WorkitemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterOutlet,
    MatRippleModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
