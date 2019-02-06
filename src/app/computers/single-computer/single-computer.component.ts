import { Computer } from './../../models/computer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-computer',
  templateUrl: './single-computer.component.html',
  styleUrls: ['./single-computer.component.css']
})
export class SingleComputerComponent implements OnInit {

  @Input() computer: Computer;

  constructor() { }

  ngOnInit() {
  }

}
