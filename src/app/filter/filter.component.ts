// src\app\filter\filter.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.getAllCities();
    this.getAllGroups();
    this.getAllStates();
    this.getAllZones();
    this.getAllAreas();
    this.getAllSourceNames();
    this.getAllNames();
  }

  public isActive: boolean[] = [false];

  toggleDropdown(index: number) {
    this.isActive[index] = !this.isActive[index];
  }

  // thisMuchDropdown: string[] = ['forGroup', 'forSourceName', 'forArea', 'forCity', 'forState'];



  
  
  //#region Api Connection of getAllGroups
  /// <summary>
  /// This method is used to get a list of all the distinct cities in the database
  /// </summary>
  groups: any[] = [];  
  getAllGroups() {
    this.sharedService.getAllGroups().subscribe(data => {
      this.groups = data;
      console.log("All the Groups", data);
    });
  }
  //#endregion

  //#region Api Connection of getAllStates
  /// <summary>
  /// This method is used to get a list of all the distinct cities in the database
  /// </summary>
  states: any[] = [];
  getAllStates() {
    this.sharedService.getAllStates().subscribe(data => {
      this.states = data;
      console.log("All the States", data);
    });
    }
  //#endregion

  //#region Api Connection of getAllCities
  /// <summary>
  /// This method is used to get a list of all the distinct cities in the database
  /// </summary>
  cities: any[] = [];
  getAllCities() {
    this.sharedService.getAllCities().subscribe(data => {
      this.cities = data;
      console.log("All the Cities", this.cities);
    });
  }
  //#endregion

  //#region Api Connection of getAllZones
  /// <summary>
  /// This method is used to get a list of all the distinct cities in the database
  /// </summary>
  zones: any[] = [];
  getAllZones() {
    this.sharedService.getAllZones().subscribe(data => {
      this.zones = data;
      console.log("All the Zones", this.zones);
    });
  
    }
  //#endregion

  //#region Api Connection of getAllArea
  /// <summary>
  /// This method is used to get a list of all the distinct cities in the database
  /// </summary>
  areas: any[] = [];
  getAllAreas() {
    this.sharedService.getAllAreas().subscribe(data => {
      this.areas = data;
      console.log("All the Area", this.areas);
    });
  }
  //#endregion

  //#region Api Connection of getAllSourceNames
  /// <summary>
  /// This method is used to get a list of all the distinct cities in the database
  /// </summary>
  sourceNames: any[] = [];
  getAllSourceNames() {
    this.sharedService.getAllSourceNames().subscribe(data => {
      this.sourceNames = data;
      console.log("All the Source Names", this.sourceNames);
    });
  }
  //#endregion

  //#region Api Connection of getAllNames
  /// <summary>
  /// This method is used to get a list of all the distinct cities in the database
  /// </summary>
  names: any[] = [];
  getAllNames() {
    this.sharedService.getAllNames().subscribe(data => {
      this.names = data;
      console.log("All the Names", this.names);
    });
  
    }
  //#endregion

}
