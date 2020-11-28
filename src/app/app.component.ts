import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit Testing Exam';
  option;
  groupMembers = [
   'Julian Felipe Castellanos Villate',
   'Deisy Viviana Amezquita Mesa',
   'Hector Alejandro Gonzalez Rodriguez',
   'Brayan Espinosa Corredor',
   'Daniel Felipe Pinto Camargo'
  ];
}
