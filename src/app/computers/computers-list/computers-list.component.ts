import { ComputerService } from './../../services/computer.service';
import { Computer } from './../../models/computer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-computers-list',
  templateUrl: './computers-list.component.html',
  styleUrls: ['./computers-list.component.css']
})
export class ComputersListComponent implements OnInit {

  computers: Observable<Computer[]>;

  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.computers = this.computerService.getComputersList();
  }

}
