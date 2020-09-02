import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponentComponent } from './training-list-component/training-list-component.component';
import { TrainingsDetailsComponent } from './trainings-details/trainings-details.component';
import {FormsModule} from '@angular/forms';
import { TakePlaceSoonPipe } from './take-place-soon.pipe';



@NgModule({
  declarations: [
    TrainingListComponentComponent,
    TrainingsDetailsComponent,
    TakePlaceSoonPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    TrainingListComponentComponent,
    TrainingsDetailsComponent,
    TakePlaceSoonPipe
  ]
})
export class TrainingsModuleModule { }
