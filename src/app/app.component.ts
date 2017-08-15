import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <input [(ngModel)]="hero.name" placeholder="name">`
})
export class AppComponent  {
   name = 'Angular'; 
   title = 'Tour Of Heroes';
   hero: Hero = {
    id: 1,
    name: 'Windstorm'
   };
  }

  export class Hero {
    id:number;
    name: string;
  }
