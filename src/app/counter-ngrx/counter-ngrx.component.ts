import { Component, OnInit, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterIncrease } from '../store/counter/counter.actions';

@Component({
  selector: 'app-counter-ngrx',
  templateUrl: './counter-ngrx.component.html',
  styleUrls: ['./counter-ngrx.component.css'],
})
export class CounterNgrxComponent implements OnInit {
  counter;

  constructor(private store: Store<{ counter }>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((data) => (this.counter = data.counterValue));
  }

  increaseCounter(){
    this.store.dispatch(new CounterIncrease(this.counter+1))
  }
}
