// src\app\filter-table\filter-table.component.ts

import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  constructor(private sharedService: SharedServiceService) { }

  clients: any[] = [];
  ngOnInit(): void {
    this.sharedService.getTopFiveData().subscribe(data => {
      this.clients = data;
      console.log(this.clients);
    });
  }





}



  




