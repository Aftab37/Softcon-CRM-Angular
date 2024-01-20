// Softcon-CRM-Angular\src\app\service\shared-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getTopFiveData(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/GetAllClientData');
  }

  // getAllGroups(): Observable<any> {
  //   return this.http.get<any>(this.baseApiUrl + '/api/GetGroups');
  // }

  getAllStates(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/GetStates');
  }

  getAllCities(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/GetCities');
  }

  getAllZones(): Observable<any> {  
    return this.http.get<any>(this.baseApiUrl + '/api/GetZones');
  }

  getAllAreas(): Observable<any> {
   return this.http.get<any>(this.baseApiUrl + '/api/GetArea');
  }

  getAllSourceNames(): Observable<any> {
    return this.http.get<any>(this.baseApiUrl + '/api/GetSourceNames');
  }

  getAllNames(): Observable<any> {  
    return this.http.get<any>(this.baseApiUrl + '/api/GetCustomerName');
  }

  //#region Post methods of filter data
  filterData(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/FilterData', data  );
  }
  //#endregion

  getAllGroups(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetGroups', data  );
  }


}