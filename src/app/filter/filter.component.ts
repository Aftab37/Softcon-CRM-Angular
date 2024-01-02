import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isActive: boolean[] = [false];

  toggleDropdown(index: number) {
    this.isActive[index] = !this.isActive[index];
  }

  thisMuchDropdown: string[] = ['forGroup', 'forSourceName', 'forArea', 'forCity', 'forState'];

  

}
