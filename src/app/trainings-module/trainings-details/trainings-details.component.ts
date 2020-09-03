import {Component, Input, OnInit} from '@angular/core';
import {Training} from '../training.model';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-trainings-details',
  templateUrl: './trainings-details.component.html',
  styleUrls: ['./trainings-details.component.scss']
})

// #################################################################################################
export class TrainingsDetailsComponent implements OnInit { // ######################################
  @Input() training: Training;
  public form: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.training.name),
      nextRun: new FormControl(this.training.nextRun),
      discontinued: new FormControl(this.training.discontinued),
      description: new FormControl(this.training.description)
    });
  }


  goBack() {
    this.goToList();
  }

  onSubmit() {
    const editedTraining = this.form.value; // return an object of all the formControls as keys ..
    editedTraining.nextRun = new Date(editedTraining.nextRun);

    Object.assign(this.training, editedTraining);
    // where the edited training is saved ?
    // doesn't the instance gets destroyed (and will the edited training object) when I go back to the list ?
    this.goToList();
  }

  goToList() {
    this.router.navigate(['/training']);
  }


}  // ##########################################################################################
// ###########################################################################################




