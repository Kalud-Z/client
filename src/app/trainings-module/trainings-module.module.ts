import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponentComponent } from './training-list-component/training-list-component.component';
import { TrainingsDetailsComponent } from './trainings-details/trainings-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TakePlaceSoonPipe } from './take-place-soon.pipe';
import { TrainingListRouteComponent } from './training-list-route/training-list-route.component';
import { TrainingDetailsRouteComponent } from './training-details-route/training-details-route.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TrainingListComponentComponent,
    TrainingsDetailsComponent,
    TakePlaceSoonPipe,
    TrainingListRouteComponent,
    TrainingDetailsRouteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    TrainingListComponentComponent,
    TrainingsDetailsComponent,
    TakePlaceSoonPipe
  ]
})
export class TrainingsModuleModule { }
