import { Component } from '@angular/core';
import {Training} from './trainings-module/training.model';
import {TrainingSelectedEvent} from './trainings-module/trainingSelectedEvent';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title : string;
  selectedTraining: Training;

  allTrainings: Training[] = [
    { id : 1 , name : 'Javascript' , discontinued : false ,  description : 'Mother of the Web' , imageUrl : "assets/images/angular2-shield.svg" },
    { id : 2 , name : 'Pascal'  , discontinued : true , description : 'First language to meet' , imageUrl : "assets/images/angularjs-shield.svg"},
    { id : 3 , name : 'C++' , discontinued : false , description : 'Dont like it :|' , imageUrl : "assets/images/typescript-logo.svg"},
  ]


  getLastSelectedTraining(event: TrainingSelectedEvent) {
    this.selectedTraining = event.selectedTraining;
  }


}
