import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {Training} from '../training.model';
import { ActivatedRoute } from '@angular/router';
import {TrainingService} from '../training.service';



@Component({
  selector: 'app-training-details-route',
  templateUrl: './training-details-route.component.html',
  styleUrls: ['./training-details-route.component.scss']
})

// ###########################################################################################################
export class TrainingDetailsRouteComponent implements OnInit { // ###########################################
  training$: Observable<Training>;
  currentID: number;


  constructor(
    private route: ActivatedRoute,
    private trainingService: TrainingService
  ) {}

  ngOnInit(): void {
    this.training$ = this.route.params.pipe(
      map(params => parseInt(params['id'], 10)),
      switchMap(id => this.trainingService.getById(id))
    );

    this.route.params.subscribe(params => {
      this.currentID = +params['id'];
      console.log(this.currentID);
    });

  }

  editedTrainingReceived(newTrainingInstance) {
    console.log(newTrainingInstance);
    this.trainingService.update(this.currentID , newTrainingInstance);
  }


} // #######################################################################################################
// #########################################################################################################
