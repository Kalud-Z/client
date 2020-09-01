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
  public tr1: Training;

  constructor() {
    this.tr1 = {
      id = 425;
      name = "tennis" ;
      description = "nadal is the best"
    }
  }

}
