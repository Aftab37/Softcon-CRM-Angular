// src\app\filter-table\filter-table.component.ts

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';
import { InputData } from '../Models/InputData.Model';
import { formatDate } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  @ViewChild(FilterComponent) filterComponent!: FilterComponent;

  constructor(private sharedService: SharedServiceService) { }

  clients: any[] = [];
  ngOnInit(): void {
    // this.filterData();
  }

  ngAfterViewInit() {
    this.filterData();
  }

  clearAllSelectionsInChild() {
    if (this.filterComponent) {
      this.filterComponent.clearAllSelections();
    }
  }
  // getTopFiveData() {
  //   this.sharedService.getTopFiveData().subscribe(data => {
  //     this.clients = data;
  //     console.log(this.clients);
  //   });
  // }

  skipBlankMobile: boolean = true;
  skipBlankEmail: boolean = false;
  ignoreDuplicateRecords: boolean = false;

  // fromDate: Date = new Date('2019-04-16T15:57:04.680Z'); 
  // toDate: Date = new Date('2019-04-20T15:57:04.680Z'); 

  fromDate: string = '';
  toDate: string = '';
  selectedGroups: string[] = [];
  selectedSourceNames: string[] = [];
  selectedNames: string[] = [];
  selectedStates: string[] = [];
  selectedCities: string[] = [];
  selectedZones: string[] = [];
  selectedAreas: string[] = [];

  onSelectedGroupsChange(selectedGroups: string[]) {
    this.selectedGroups = selectedGroups;
    console.log('Updated Selected Groups in Parent Component:', selectedGroups);
  }
  onSelectedSourceNamesChange(selectedSourceNames: string[]) {
    this.selectedSourceNames = selectedSourceNames;
    console.log('Updated Selected Source Names in Parent Component:', selectedSourceNames);
  }
  onSelectedNamesChange(selectedNames: string[]) {
    this.selectedNames = selectedNames;
    console.log('Updated Selected Names in Parent Component:', selectedNames);
  }
  onSelectedStatesChange(selectedStates: string[]) {
    this.selectedStates = selectedStates;
    console.log('Updated Selected States in Parent Component:', selectedStates);
  }
  onSelectedCitiesChange(selectedCities: string[]) {
    this.selectedCities = selectedCities;
    console.log('Updated Selected Cities in Parent Component:', selectedCities);
  }
  onSelectedZonesChange(selectedZones: string[]) {
    this.selectedZones = selectedZones;
    console.log('Updated Selected Zones in Parent Component:', selectedZones);
  }
  onSelectedAreasChange(selectedAreas: string[]) {
    this.selectedAreas = selectedAreas;
    console.log('Updated Selected Areas in Parent Component:', selectedAreas);
  }

  areAnyFiltersSelected(): boolean {
    return (
      this.selectedGroups.length > 0 ||
      this.selectedSourceNames.length > 0 ||
      this.selectedNames.length > 0 ||
      this.selectedStates.length > 0 ||
      this.selectedCities.length > 0 ||
      this.selectedZones.length > 0 ||
      this.selectedAreas.length > 0
    );
  }

  filteredData: any[] = [];
  filterData(): void {
    if (!this.areAnyFiltersSelected()) {
      alert('Please apply atleast one filter');
      return;
    }

    console.log(this.fromDate);
    console.log(this.toDate);

    const inputData: InputData = {
      FromDate: this.fromDate || null,
      ToDate: this.toDate || null,
      Group: this.selectedGroups,
      SourceName: this.selectedSourceNames,
      Name: this.selectedNames,
      StateList: this.selectedStates,
      CityList: this.selectedCities,
      Zone: this.selectedZones,
      AreaList: this.selectedAreas,
      SkipBlankMobile: this.skipBlankMobile,
      SkipBlankEmail: this.skipBlankEmail,
      IgnoreDuplicateRecords: this.ignoreDuplicateRecords,
      //PageNo: 1
    };

    console.log("inputData", inputData)

    this.sharedService.filterData(inputData)
      .subscribe(
        (response: any) => {
          if (!response || response.length === 0) {
            alert('No data found based on the applied filters.');
          } else {
            this.filteredData = response;
            console.log("Received Data", this.filteredData);
          }
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }

  transformDate(item: any): any {
    const transformedItem = { ...item };
    if (transformedItem.recordCreated) {
      const date = new Date(transformedItem.recordCreated);
      transformedItem.recordCreated = formatDate(date, 'yyyy-MM-dd', 'en');
    }
    return transformedItem;
  }
  
  filteredDataWithoutSpecifiedColumn: any[] = [];
  readyToPrint: any[] = [];
  DownloadData() {
    this.filteredDataWithoutSpecifiedColumn = this.filteredData.map(item => {
      const { id,softconClientID,recordID,tableID,isDistributor,isNewRecord, ...filteredItem } = item;
      return filteredItem;
    });
    this.readyToPrint = this.filteredDataWithoutSpecifiedColumn.map(item => this.transformDate(item));
    this.GenerateExcel(this.readyToPrint, 'Customer Data')
  }

  GenerateExcel(Data: any, fileName: string) {
    const replacer = (key: any, value: any) => (value === null ? '' : value);
    const header = Object.keys(Data[0]);
    const csv = Data.map(
      (row: any) => header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(',')
    );
    csv.unshift(header.join(','));
    // csv.pop();
    const csvArray = csv.join('\r\n');
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'textcsv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    let todaydate = formatDate(new Date(), 'ddMMyyyy', 'en');
    a.download = 'MIS SaleSales Return Summary(' + todaydate + ').csv';
    a.download = '' + fileName + '(' + todaydate + ').csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}



