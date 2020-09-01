import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingListComponentComponent } from './training-list-component/training-list-component.component';



@NgModule({
  declarations: [TrainingListComponentComponent],
  imports: [CommonModule],
  exports : [ TrainingListComponentComponent ]
})
export class TrainingsModuleModule { }
