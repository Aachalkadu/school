import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private endpoint: string = "http://localhost:8080"

  constructor(public http: HttpClient) {

  }

  login(data: any) {
    console.log(data)

    return this.http.post<any>(this.endpoint + "/student", data)
  }

}
