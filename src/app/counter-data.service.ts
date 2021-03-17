import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterDataService {
  private counterValue = new BehaviorSubject(0);

  counter = this.counterValue.asObservable();

  constructor() { }

  changeCounterValue(newCounterVal){
    this.counterValue.next(newCounterVal)
  }
  

}
