import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ENDPOINTS = {
    employeeById: 'http://localhost:51907/api/user/'
  }


  constructor(private http: HttpClient) { }


  getEmployeeById(empId:number): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.employeeById + empId}`)
  }

  deleteUser(id:number){
    return this.http.delete<any>(`${this.ENDPOINTS.employeeById + id}`)
  }

  addUser(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:51907/api/user',data,)
  }

  updateUser(id:number, data:any):Observable<any>{
    return this.http.put<any>('http://localhost:51907/api/user/'+id, data)
  }
}
