import { Component } from '@angular/core';


interface Training {
  id: number;
  name: string;
  description: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title : string;
  numOfTrainings : number;

  allTrainings : Training[] = [
    { id : 1 , name : 'tennis' , description : 'nadal is the best'},
    { id : 2 , name : 'football' , description : 'chris is the best'},
    { id : 3 , name : 'salsa' , description : 'shakira is the best'},
  ]
}
