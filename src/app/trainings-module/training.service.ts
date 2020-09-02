import { Injectable } from '@angular/core';

import {Training} from './training.model';
import { TRAININGS } from './training.mock';
import {Observable, ReplaySubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// #######################################################################################################
export class TrainingService {
  private TrSubject$ = new ReplaySubject<Training[]>(1);


  constructor() {
    this.TrSubject$.next(TRAININGS);
  }


  getAll(): Observable<Training[]> { return this.TrSubject$; }

}

// end class ############################################################################################
