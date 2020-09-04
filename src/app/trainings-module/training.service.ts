import { Injectable } from '@angular/core';

import {Training} from './training.model';
import { TRAININGS } from './training.mock';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import { HttpClient } from "@angular/common/http";


import {first, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
// #######################################################################################################
export class TrainingService {
   trainingsSubject: Subject<Training[]>;
   private cached = false;


  constructor(private http: HttpClient) {
    this.trainingsSubject = new ReplaySubject<Training[]>(1);
    this.trainingsSubject.next(TRAININGS);
  }


  // getAll(): Observable<Training[]> { return this.trainingsSubject; }


  getAll(): Observable<Training[]> {
    if (!this.cached) {
      this.load();
      this.cached = true;
    }
    return this.trainingsSubject;
  }

  load() {
    this.http.get<Training[]>('http://localhost:3000/api/training')
      .subscribe(ts => {
        this.trainingsSubject.next(ts);
        console.log('this is came back from the API : ' , ts);
      });
  }



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

  // it doesnt work. the edit training is not saved after going back to the list.
  update(id: number, data: Partial<Training>): void {
    this.getAll().pipe(
      first(),
      map((trainings: Training[]) => {
        return trainings.map((training: Training) => {
          return training.id === id ? { ...training, ...data } : training;
        });
      })
    ).subscribe((updatedTrainingsArray: Training[]) =>
    {this.trainingsSubject.next(updatedTrainingsArray) ; console.log('this the updated array : ' , updatedTrainingsArray)});
  }



} // end class ############################################################################################
