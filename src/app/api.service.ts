import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchAllShips() {
    let endpoint = 'ships'
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
  }
}
