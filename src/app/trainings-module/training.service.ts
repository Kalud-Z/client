import { Injectable } from '@angular/core';

import {Training} from './training.model';
import { TRAININGS } from './training.mock';

@Injectable({
  providedIn: 'root'
})

export class TrainingService {

  constructor() { }

  getAll(): Training[] {
    return  TRAININGS;
  }

}
