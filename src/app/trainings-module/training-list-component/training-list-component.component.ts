import {Component, Input, Output , EventEmitter} from '@angular/core';

import {TrainingSelectedEvent} from '../trainingSelectedEvent';
import {Training} from '../training.model';



@Component({
  selector: 'app-training-list-component',
  templateUrl: './training-list-component.component.html',
  styleUrls: ['./training-list-component.component.scss']
})


export class TrainingListComponentComponent  {
  @Input() manyTrainings: Training[];

  @Output() trainingSelected = new EventEmitter<TrainingSelectedEvent>();


  onListItemClicked(event , tr: Training) {
    const selectedEvent = new TrainingSelectedEvent(tr);
    this.trainingSelected.emit(selectedEvent);
  }


}










