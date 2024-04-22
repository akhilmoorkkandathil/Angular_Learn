import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h3>
              welcome {{name}}
            </h3>
            <input type="text" value="Vishwas" [id]="myId">
            <input type="text" value="Vishwas" bind-id="myId">
            <input type="text" value="Vishwas" id="{{myId}}">
            <button (click)="onClick()">Click</button>
            `,
  styles: [`
  div{
    color:red
  }`]
})
export class TestComponent {

  public name = "Akhil";  //property
  public myId = "testId" // this property is binding to the input elemnt => PRoperty binding
  greetUser(){
    return "Hello " + this.name;
  }

  onClick(){
    console.log("Button clicked");
    
  }
}
