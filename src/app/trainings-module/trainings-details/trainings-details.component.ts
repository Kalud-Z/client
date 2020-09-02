import {Component, Input, OnInit} from '@angular/core';
import {Training} from '../training.model';

@Component({
  selector: 'app-trainings-details',
  templateUrl: './trainings-details.component.html',
  styleUrls: ['./trainings-details.component.scss']
})
export class TrainingsDetailsComponent implements OnInit {
  @Input() training: Training;

  constructor() { }

  ngOnInit(): void {
  }

}
