import { Component, Input, OnInit } from '@angular/core';
import { IShowTime } from 'src/app/model/ishowtime';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.css']
})
// Show Time Component 
export class ShowTimeComponent implements OnInit {
  @Input() showtime:IShowTime[]
  constructor() { }

  ngOnInit() {
  }
  

}
