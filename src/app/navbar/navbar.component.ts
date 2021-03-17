import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterDataService } from './../counter-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  counter;
  ngrxCounter ;
  constructor(private counterService: CounterDataService , private store : Store<{counter}>) {}

  ngOnInit(): void {
    this.getCounterValue();
   this.ngrxCounter =  this.store.select('counter');
  }



  getCounterValue() {
    this.counter = this.counterService.counter
  }

  changeCounter(){
    this.counterService.changeCounterValue(this.counter+2)
  }
}
