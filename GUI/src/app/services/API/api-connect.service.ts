import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  constructor(
    private _http:HttpClient
  ) { }

  host:string = 'https://localhost:7217'

  get(path:string) {
    return this._http.get(this.host + path)
  }

  post(path:string, formData:any) {
    return this._http.post(this.host + path, formData)
  }

  delete(path:string) {
    return this._http.delete(this.host + path)
  }
}
