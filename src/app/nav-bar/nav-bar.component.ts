import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@Input() menudata: any;
@Output() dataSend: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  eventBinding(menu?: any){
    this.dataSend.emit(menu);
  }
}
