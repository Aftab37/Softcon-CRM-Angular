import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';
import { Summary } from '@angular/compiler';
import { SearchInput } from '../Models/SearchInput.Model';

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

    this.selected_Groups = ['Agent'];
    this.selectedGroupsChange.emit(this.selected_Groups);
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

  //#region Api Connection of getAllGroups and filtering options
  groups: any[] = [];

  searchGroupLetters: any = '';

  onGroupSearchInput(): void {
    console.log("User Typed", this.searchGroupLetters)
    this.getAllGroups();
  }

  getAllGroups(): void {
    const searchInput: SearchInput = {
      SearchLetters: this.searchGroupLetters
    };
    console.log("SearchInput", searchInput)
    this.sharedService.getAllGroups(searchInput)
      .subscribe(
        (response: any) => {
          this.groups = this.trimArrayItems(response);
          console.log("All the Groups", this.groups);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
  //#endregion

  //#region Api Connection of getAllStates
  states: any[] = [];

  searchStateLetters: any = '';

  onStateSearchInput(): void {
    console.log("User Typed", this.searchStateLetters)
    this.getAllStates();
  }

  getAllStates(): void {
    const searchInput: SearchInput = {
      SearchLetters: this.searchStateLetters
    };
    console.log("SearchInput", searchInput)
    this.sharedService.getAllStates(searchInput)
      .subscribe(
        (response: any) => {
          this.states = this.trimArrayItems(response);
          console.log("All the States", this.states);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
  //#endregion

  //#region Api Connection of getAllCities
  cities: any[] = [];

  searchCityLetters: any = '';

  onCitySearchInput(): void {
    console.log("User Typed", this.searchCityLetters)
    this.getAllCities();
  }

  getAllCities(): void {
    const searchInput: SearchInput = {
      SearchLetters: this.searchCityLetters
    };
    console.log("SearchInput", searchInput)
    this.sharedService.getAllCities(searchInput)
      .subscribe(
        (response: any) => {
          this.cities = this.trimArrayItems(response);
          console.log("All the Cities", this.cities);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
  //#endregion

  //#region Api Connection of getAllZones
  zones: any[] = [];

  searchZoneLetters: any = '';

  onZoneSearchInput(): void {
    console.log("User Typed", this.searchZoneLetters)
    this.getAllZones();
  }

  getAllZones(): void {
    const searchInput: SearchInput = {
      SearchLetters: this.searchZoneLetters
    };
    console.log("SearchInput", searchInput)
    this.sharedService.getAllZones(searchInput)
      .subscribe(
        (response: any) => {
          this.zones = this.trimArrayItems(response);
          console.log("All the Zones", this.zones);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
  //#endregion

  //#region Api Connection of getAllArea
  areas: any[] = [];

  searchAreaLetters: any = '';

  onAreaSearchInput(): void {
    console.log("User Typed", this.searchAreaLetters)
    this.getAllAreas();
  }

  getAllAreas(): void {
    const searchInput: SearchInput = {
      SearchLetters: this.searchAreaLetters
    };
    console.log("SearchInput", searchInput)
    this.sharedService.getAllAreas(searchInput)
      .subscribe(
        (response: any) => {
          this.areas = this.trimArrayItems(response);
          console.log("All the Area", this.areas);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
  //#endregion

  //#region Api Connection of getAllSourceNames
  sourceNames: any[] = [];

  SearchSourceNameLetters: any = "";

  onSourceNameSearchInput(): void {
    console.log("User Typed", this.SearchSourceNameLetters)
    this.getAllSourceNames();
  }

  getAllSourceNames(): void {
    const searchInput: SearchInput = {
      SearchLetters: this.SearchSourceNameLetters
    };
    console.log("SearchInput", searchInput)
    this.sharedService.getAllSourceNames(searchInput)
      .subscribe(
        (response: any) => {
          this.sourceNames = this.trimArrayItems(response);
          console.log("All the Source Names", this.sourceNames);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
  //#endregion

  //#region Api Connection of getAllNames
  names: any[] = [];

  searchNameLetters: any = "";

  onNameSearchInput(): void {
    console.log("User Typed", this.searchNameLetters)
    this.getAllNames();
  }

  getAllNames(): void {
    const searchInput: SearchInput = {
      SearchLetters: this.searchNameLetters
    };
    console.log("SearchInput", searchInput)
    this.sharedService.getAllNames(searchInput)
      .subscribe(
        (response: any) => {
          this.names = this.trimArrayItems(response);
          console.log("All the Names", this.names);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
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
    this.selectedGroupsChange.emit(this.selected_Groups);
  }
  //#endregion

  //#region List of checked SourceNames
  selected_SourceNames: string[] = [];
  @Output() selectedSourceNamesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  onSourceNameCheckboxChange(index: number) {
    const sourceNameCheck = this.sourceNames[index];
    if (this.selected_SourceNames.includes(sourceNameCheck)) {
      this.selected_SourceNames = this.selected_SourceNames.filter(c => c !== sourceNameCheck);
    } else {
      this.selected_SourceNames.push(sourceNameCheck);
    }
    console.log('Selected SourceName Checkbox:', this.selected_SourceNames);
    this.selectedSourceNamesChange.emit(this.selected_SourceNames);
  }
  //#endregion

  //#region List of checked Names
  selected_Names: string[] = [];
  @Output() selectedNamesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  onNameCheckboxChange(index: number) {
    const nameCheck = this.names[index];
    if (this.selected_Names.includes(nameCheck)) {
      this.selected_Names = this.selected_Names.filter(c => c !== nameCheck);
    } else {
      this.selected_Names.push(nameCheck);
    }
    console.log('Selected Name Checkbox:', this.selected_Names);
    this.selectedNamesChange.emit(this.selected_Names);
  }
  //#endregion

  //#region List of checked States
  selected_States: string[] = [];
  @Output() selectedStatesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  onStateCheckboxChange(index: number) {
    const stateCheck = this.states[index];
    if (this.selected_States.includes(stateCheck)) {
      this.selected_States = this.selected_States.filter(c => c !== stateCheck);
    } else {
      this.selected_States.push(stateCheck);
    }
    console.log('Selected State Checkbox:', this.selected_States);
    this.selectedStatesChange.emit(this.selected_States);
  }
  //#endregion

  //#region List of checked Cities
  @Output() selectedCitiesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selected_Cities: string[] = [];
  onCityCheckboxChange(index: number) {
    const cityCheck = this.cities[index];
    if (this.selected_Cities.includes(cityCheck)) {
      this.selected_Cities = this.selected_Cities.filter(c => c !== cityCheck);
    } else {
      this.selected_Cities.push(cityCheck);
    }
    console.log('Selected City Checkbox:', this.selected_Cities);
    this.selectedCitiesChange.emit(this.selected_Cities);

  }
  //#endregion

  //#region List of checked Zones
  @Output() selectedZonesChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selected_Zones: string[] = [];
  onZoneCheckboxChange(index: number) {
    const zoneCheck = this.zones[index];
    if (this.selected_Zones.includes(zoneCheck)) {
      this.selected_Zones = this.selected_Zones.filter(c => c !== zoneCheck);
    } else {
      this.selected_Zones.push(zoneCheck);
    }
    console.log('Selected Zone Checkbox:', this.selected_Zones);
    this.selectedZonesChange.emit(this.selected_Zones);
  }
  //#endregion

  //#region List of checked Areas
  @Output() selectedAreasChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selected_Areas: string[] = [];
  onAreaCheckboxChange(index: number) {
    const areaCheck = this.areas[index];
    if (this.selected_Areas.includes(areaCheck)) {
      this.selected_Areas = this.selected_Areas.filter(c => c !== areaCheck);
    } else {
      this.selected_Areas.push(areaCheck);
    }
    console.log('Selected Area Checkbox:', this.selected_Areas);
    this.selectedAreasChange.emit(this.selected_Areas);
  }
  //#endregion

  //#endregion 

  //#region Clear all selection logic
  // <Summary>
  // Aftab Ansari - 18th January 2024
  // </Summary>
  clearAllSelections() {
    this.selected_Groups = [];
    this.selected_SourceNames = [];
    this.selected_Names = [];
    this.selected_States = [];
    this.selected_Cities = [];
    this.selected_Zones = [];
    this.selected_Areas = [];

    this.selectedGroupsChange.emit(this.selected_Groups);
    this.selectedSourceNamesChange.emit(this.selected_SourceNames);
    this.selectedNamesChange.emit(this.selected_Names);
    this.selectedStatesChange.emit(this.selected_States);
    this.selectedCitiesChange.emit(this.selected_Cities);
    this.selectedZonesChange.emit(this.selected_Zones);
    this.selectedAreasChange.emit(this.selected_Areas);
    console.log('Cleared Selected Checkbox form child component:');
  }
  //#endregion

}
