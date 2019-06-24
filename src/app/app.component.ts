import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menudata: any;
  selectedRoute: any;
  constructor() { }
  ngOnInit() {
    this.menudata = [
      {
        'menuName': 'Home',
        'route': 'home'
      },
      {
        'menuName': 'About',
        'route': 'about'
      },
      {
        'menuName': 'Contact',
        'route': 'contact'
      }]
  }
  eventBinding(event?: any){
    this.selectedRoute = event.route;
  }
}