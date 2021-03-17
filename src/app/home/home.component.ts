import { Component, OnInit } from '@angular/core';
import { CounterDataService } from '../counter-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter : number ;

  constructor(private counterService : CounterDataService) { }

  // this.router.params.subscribe(pramas => pramas)

  ngOnInit(): void {
    this.counterService.counter.subscribe(data => this.counter = data);
  }

  changeCounter(){
    this.counterService.changeCounterValue(this.counter+1)
  }

}
