import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import {TrainingSelectedEvent} from '../trainingSelectedEvent';
import {Training} from '../training.model';
import {Subscription} from 'rxjs';
import {TrainingService} from '../training.service';
import {FormControl, FormGroup} from '@angular/forms';



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

  constructor(private trainingService: TrainingService) {}


  ngOnInit() {
    this.trainingsSubscription = this.trainingService.getAll()
      .subscribe(trainings => this.manyTrainings = trainings);
  }


  onListItemClicked(event , tr: Training) {

  }


  ngOnDestroy() {
    this.trainingsSubscription.unsubscribe();
  }

}


