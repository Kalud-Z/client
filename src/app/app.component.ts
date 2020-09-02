import { Component, OnInit } from '@angular/core';

import {Training} from './trainings-module/training.model';
import {TrainingSelectedEvent} from './trainings-module/trainingSelectedEvent';
import {TrainingService} from './trainings-module/training.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  selectedTraining: Training;
  allTrainings: Training[];

  constructor(private trainingService: TrainingService) {}

  ngOnInit() {
    this.allTrainings = this.trainingService.getAll();
  }

  getLastSelectedTraining(event: TrainingSelectedEvent) {
    this.selectedTraining = event.selectedTraining;
  }


}
