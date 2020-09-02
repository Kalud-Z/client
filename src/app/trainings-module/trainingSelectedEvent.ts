import {Training} from './training.model';


export class TrainingSelectedEvent {
  constructor(public readonly selectedTraining: Training) {}
}
