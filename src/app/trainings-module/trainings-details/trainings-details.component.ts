import {Component, Input, EventEmitter , OnInit, Output} from '@angular/core';

import {Training} from '../training.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DiscontinuedValidator} from '../training-validators';
import {TrainingService} from '../training.service';


@Component({
  selector: 'app-trainings-details',
  templateUrl: './trainings-details.component.html',
  styleUrls: ['./trainings-details.component.scss']
})

// #################################################################################################
export class TrainingsDetailsComponent implements OnInit { // ######################################
  @Input() training: Training;
  @Output() trainingChangedEvent = new EventEmitter();

  public form: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private trService: TrainingService
  ) { }


  ngOnInit(): void {
    // @ts-ignore
    // @ts-ignore
    this.form = new FormGroup({
      name: new FormControl(this.training.name , Validators.required),
      nextRun: new FormControl(this.training.nextRun),
      discontinued: new FormControl(this.training.discontinued),
      description: new FormControl(this.training.description , Validators.minLength(10))
    }, DiscontinuedValidator);
    this.trService.trainingsSubject.subscribe(val => console.log('subject data : ' , val));
  }

  goBack() { this.goToList() }

  onSubmit() {
    const editedTraining = this.form.value; // return an object of all the formControls as keys ..
    editedTraining.nextRun = new Date(editedTraining.nextRun);

    Object.assign(this.training, editedTraining);
    // where the edited training is saved ?
    // doesn't the instance gets destroyed (and will the edited training object) when I go back to the list ?

    this.trainingChangedEvent.emit(editedTraining);

    this.goToList();
  }

  goToList() { this.router.navigate(['/training']) }


}  // ##########################################################################################
// ###########################################################################################




