import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingListComponentComponent} from './trainings-module/training-list-component/training-list-component.component';


const routes: Routes = [
  { path: 'training', component: TrainingListComponentComponent },
  { path: '**', redirectTo: '/training' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
