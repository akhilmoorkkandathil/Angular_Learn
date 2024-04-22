import { Component } from '@angular/core';

@Component({  //metadata - component decorator - this is function that attached to the class below it
  selector: 'app-root',  //a custom html tag that used to represent this coponent where it render
  templateUrl: './app.component.html',  //represent view of this component
  styleUrl: './app.component.css' // represents the sysle of this specific component
})
export class AppComponent {
  //title = 'Angular App'; //proprty
}
