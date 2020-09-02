import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponentComponent } from './training-list-component/training-list-component.component';
import { TrainingsDetailsComponent } from './trainings-details/trainings-details.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    TrainingListComponentComponent,
    TrainingsDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    TrainingListComponentComponent,
    TrainingsDetailsComponent ]
})
export class TrainingsModuleModule { }
