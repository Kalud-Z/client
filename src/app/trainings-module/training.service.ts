import { Injectable } from '@angular/core';

import {Training} from './training.model';
import { TRAININGS } from './training.mock';
import {Observable, ReplaySubject} from 'rxjs';

import { map } from 'rxjs/operators';



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


  getById(id: number): Observable<Training> {
    return this.getAll()
      .pipe(
        map(ts => {
          const training = ts.find(t => t.id === id);
          if (training) {
            return training
          } else {
            throw new Error(`Could not find training with id ${id}`);
          }
        })
      );
  }


} // end class ############################################################################################
