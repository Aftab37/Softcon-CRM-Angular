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

  getAllGroups(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetGroups', data  );
  }

  getAllSourceNames(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetSourceNames', data  );
  }

  getAllCities(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetCities', data);
  }
  
  getAllStates(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetStates', data);
  }

  getAllNames(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetCustomerName', data);
  }

  getAllZones(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetZones', data);
  }

  getAllAreas(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/GetArea', data);
  }
  
  //#region Post methods of filter data
  filterData(data: any): Observable<any> {
    return this.http.post(this.baseApiUrl + '/api/FilterData', data  );
  }
  //#endregion

 
}