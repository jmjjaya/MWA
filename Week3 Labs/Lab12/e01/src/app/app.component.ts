import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componetCounterValue: number;

  onCounterChange(event){
    console.log(event);
    this.componetCounterValue = event;
  }
}


