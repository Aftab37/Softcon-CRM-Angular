import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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
    this.getAllGroups();
    this.getAllStates();
    this.getAllCities();
    this.getAllZones();
    this.getAllAreas();
    this.getAllNames();
    this.getAllSourceNames();
  }

  public isActive: boolean[] = [false, false, false, false, false, false, false];

  toggleDropdown(index: number) {
    for (let i = 0; i < this.isActive.length; i++) {
      if (i !== index) {
        this.isActive[i] = false;
      }
    }
    this.isActive[index] = !this.isActive[index];
  }

  //#region All methods for the dropdown selection APIs
  /// <summary>
  /// Aftab Ansari - 8 January 2024
  /// </summary>
  
  trimArrayItems(array: string[]) {
    return array.map(item => item.trim());
  }

  //#region Api Connection of getAllGroups
  groups: any[] = [];  
  getAllGroups() {
    this.sharedService.getAllGroups().subscribe(data => {
      this.groups = this.trimArrayItems(data);
      console.log("All the Groups", data);
    });
  }
  //#endregion
  //#region Api Connection of getAllStates
  states: any[] = [];
  getAllStates() {
    this.sharedService.getAllStates().subscribe(data => {
      this.states = this.trimArrayItems(data);
      console.log("All the States", data);
    });
    }
  //#endregion

  //#region Api Connection of getAllCities
  cities: any[] = [];
  getAllCities() {
    this.sharedService.getAllCities().subscribe(data => {
      this.cities = this.trimArrayItems(data);
      console.log("All the Cities", this.cities);
    });
  }
  //#endregion

  //#region Api Connection of getAllZones
  zones: any[] = [];
  getAllZones() {
    this.sharedService.getAllZones().subscribe(data => {
      this.zones = this.trimArrayItems(data);
      console.log("All the Zones", this.zones);
    });
  
    }
  //#endregion

  //#region Api Connection of getAllArea
  areas: any[] = [];
  getAllAreas() {
    this.sharedService.getAllAreas().subscribe(data => {
      this.areas = this.trimArrayItems(data);
      console.log("All the Area", this.areas);
    });
  }
  //#endregion

  //#region Api Connection of getAllSourceNames
  sourceNames: any[] = [];
  getAllSourceNames() {
    this.sharedService.getAllSourceNames().subscribe(data => {
      this.sourceNames = this.trimArrayItems(data);
      console.log("All the Source Names", this.sourceNames);
    });
  }
  //#endregion

  //#region Api Connection of getAllNames
  names: any[] = [];
  getAllNames() {
    this.sharedService.getAllNames().subscribe(data => {
      this.names = this.trimArrayItems(data);
      console.log("All the Names", this.names);
    });
  
    }
  //#endregion

  //#endregion

  //#region All the Logic for maintaining Checked or Unchecked checkboxes of all the dropdowns
  /// <summary>
  /// Aftab Ansari - 11th January 2024
  /// </summary>

  //#region List of checked Groups.
  @Output() selectedGroupsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selected_Groups: string[] = [];
  onGroupCheckboxChange(index: number) {
    const groupCheck = this.groups[index];
    if (this.selected_Groups.includes(groupCheck)) {
      this.selected_Groups = this.selected_Groups.filter(c => c !== groupCheck);
    } else {
      this.selected_Groups.push(groupCheck);
    }
    console.log('Selected Customer Checkbox:', this.selected_Groups);
    // Apply filters or other actions as needed
    // Emit the updated array to the parent component
    this.selectedGroupsChange.emit(this.selected_Groups);
  }
  //#endregion

  //#region List of checked SourceNames
  selected_SourceNames: string[] = [];
  @Output() selectedSourceNamesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  onSourceNameCheckboxChange(index: number) {
    const sourceNameCheck = this.sourceNames[index];
    if (this.selected_SourceNames.includes(sourceNameCheck)) {
      this.selected_SourceNames = this.selected_SourceNames.filter(c => c!== sourceNameCheck);
    } else {
      this.selected_SourceNames.push(sourceNameCheck);
    }
    console.log('Selected SourceName Checkbox:', this.selected_SourceNames);
    // Apply filters or other actions as needed
    // Emit the updated array to the parent component
    this.selectedSourceNamesChange.emit(this.selected_SourceNames);
  }
  //#endregion

  //#region List of checked Names
  selected_Names: string[] = [];
  @Output() selectedNamesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  onNameCheckboxChange(index: number) {
    const nameCheck = this.names[index];
    if (this.selected_Names.includes(nameCheck)) {
      this.selected_Names = this.selected_Names.filter(c => c!== nameCheck);
    } else {
      this.selected_Names.push(nameCheck);
    }
    console.log('Selected Name Checkbox:', this.selected_Names);
    // Apply filters or other actions as needed
    // Emit the updated array to the parent component
    this.selectedNamesChange.emit(this.selected_Names);
  }
  //#endregion

  //#region List of checked States
  selected_States: string[] = [];
  @Output() selectedStatesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  onStateCheckboxChange(index: number) {
    const stateCheck = this.states[index];
    if (this.selected_States.includes(stateCheck)) {
      this.selected_States = this.selected_States.filter(c => c!== stateCheck);
    } else {
      this.selected_States.push(stateCheck);
    }
    console.log('Selected State Checkbox:', this.selected_States);
    // Apply filters or other actions as needed
    // Emit the updated array to the parent component
    this.selectedStatesChange.emit(this.selected_States);
  }
  //#endregion
  
  //#region List of checked Cities
  @Output() selectedCitiesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selected_Cities: string[] = [];
  onCityCheckboxChange(index: number) {
    const cityCheck = this.cities[index];
    if (this.selected_Cities.includes(cityCheck)) {
      this.selected_Cities = this.selected_Cities.filter(c => c!== cityCheck);
    } else {
      this.selected_Cities.push(cityCheck);
    }
    console.log('Selected City Checkbox:', this.selected_Cities);
    // Apply filters or other actions as needed
    // Emit the updated array to the parent component
    this.selectedCitiesChange.emit(this.selected_Cities);

  }
  //#endregion
  
  //#region List of checked Zones
  @Output() selectedZonesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selected_Zones: string[] = [];
  onZoneCheckboxChange(index: number) {
    const zoneCheck = this.zones[index];
    if (this.selected_Zones.includes(zoneCheck)) {
      this.selected_Zones = this.selected_Zones.filter(c => c!== zoneCheck);
    } else {
      this.selected_Zones.push(zoneCheck);
    }
    console.log('Selected Zone Checkbox:', this.selected_Zones);
    // Apply filters or other actions as needed
    // Emit the updated array to the parent component
    this.selectedZonesChange.emit(this.selected_Zones);
  }
  //#endregion
  
  //#region List of checked Areas
  @Output() selectedAreasChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selected_Areas: string[] = [];
  onAreaCheckboxChange(index: number) {
    const areaCheck = this.areas[index];
    if (this.selected_Areas.includes(areaCheck)) {
      this.selected_Areas = this.selected_Areas.filter(c => c!== areaCheck);
    } else {
      this.selected_Areas.push(areaCheck);
    }
    console.log('Selected Area Checkbox:', this.selected_Areas);
    // Apply filters or other actions as needed
    // Emit the updated array to the parent component
    this.selectedAreasChange.emit(this.selected_Areas);
  }
  //#endregion

  //#endregion 
}
