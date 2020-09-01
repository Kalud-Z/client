import {Component, Input, OnInit} from '@angular/core';
import {Training} from '../../app.component';

@Component({
  selector: 'app-training-list-component',
  templateUrl: './training-list-component.component.html',
  styleUrls: ['./training-list-component.component.scss']
})


export class TrainingListComponentComponent implements OnInit {
  @Input() manyTrainings : Training[];



  ngOnInit(): void {
  }


  onListItemClicked(event , tr: Training) {
    console.log(event , tr.name )
  }


}
