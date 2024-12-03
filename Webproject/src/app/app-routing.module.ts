import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BoardTemplateComponent } from './components/boards/backlog-items-board/backlog-items-board.component';
import { FeatureBoardComponent } from './components/boards/feature-board/feature-board.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OverviewComponent } from './components/overview/overview/overview.component';
import {ProjectsComponent} from "./components/projects/projects.component";

export const routes: Routes = [
    {path: 'backlog', component: BoardTemplateComponent},
    {path: 'feature', component: FeatureBoardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'overview', component: OverviewComponent},
    {path: 'projects', component: ProjectsComponent}
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true}

        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
