import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { BoardTemplateComponent } from './components/boards/backlog-items-board/backlog-items-board.component';
import { FeatureBoardComponent } from './components/boards/feature-board/feature-board.component';

const appRoutes: Routes = [
    {path: 'backlog-board', component: BoardTemplateComponent},
    {path: 'feature-board', component: FeatureBoardComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true}

        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
    
}