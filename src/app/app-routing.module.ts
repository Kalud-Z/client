import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingListRouteComponent} from './trainings-module/training-list-route/training-list-route.component';


const routes: Routes = [
  { path: 'training', component: TrainingListRouteComponent },
  { path: '**', redirectTo: '/training' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
