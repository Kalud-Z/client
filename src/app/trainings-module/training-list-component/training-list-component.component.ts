import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import {TrainingSelectedEvent} from '../trainingSelectedEvent';
import {Training} from '../training.model';
import {Subscription} from 'rxjs';
import {TrainingService} from '../training.service';



@Component({
  selector: 'app-training-list-component',
  templateUrl: './training-list-component.component.html',
  styleUrls: ['./training-list-component.component.scss']
})

// #####################################################################################################
// #####################################################################################################
export class TrainingListComponentComponent implements OnInit, OnDestroy {
  manyTrainings: Training[];
  trainingsSubscription: Subscription;
  selectedTraining: Training;
  @Output() trainingSelected = new EventEmitter<TrainingSelectedEvent>();

  constructor(private trainingService: TrainingService) {}


  ngOnInit() {
    this.trainingsSubscription = this.trainingService.getAll()
      .subscribe(trainings => this.manyTrainings = trainings);
  }


  onListItemClicked(event , tr: Training) {
    this.selectedTraining = tr;
    const selectedEvent = new TrainingSelectedEvent(tr);
    this.trainingSelected.emit(selectedEvent);
  }


  ngOnDestroy() {
    this.trainingsSubscription.unsubscribe();
  }

}


