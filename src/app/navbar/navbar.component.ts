import { Component, OnInit } from '@angular/core';
import { CounterDataService } from './../counter-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  counter;
  constructor(private counterService: CounterDataService) {}

  ngOnInit(): void {
    this.getCounterValue();
  }

  getCounterValue() {
    this.counterService.counter.subscribe((data) => (this.counter = data));
  }

  changeCounter(){
    this.counterService.changeCounterValue(this.counter+2)
  }
}
