import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url ='./assets/db.json';
  constructor( private httpClient: HttpClient ) { }
 /* getEmployeeList(): Observable<Object>{
    return this.httpClient.get(`${this.url}`);
  }*/
  getEmployeeList(){
    let emps= JSON.parse(localStorage.getItem('employee') || '[]' );
    return emps;
  }

  createEmployee(emp:any){
    let emps= JSON.parse(localStorage.getItem('employee') || '[]');
    //if(emp)
    emps.push(emp);
    localStorage.setItem('employee', JSON.stringify(emps))
    console.log(emp)
  }
  deleteEmployee(id:any){
    let emps= JSON.parse(localStorage.getItem('employee') || '[]');
    for(let i=0; i< emps.length;i++){
      if(emps[i].id==id){
      emps.splice(i,1)
      }
    }
    localStorage.setItem('employee', JSON.stringify(emps))
   
  }
  updateEmployee(oldEmp:any, newEmp:any){
    let emps= JSON.parse(localStorage.getItem('employee') || '[]')
     for(let i=0; i <emps.length; i++ ){
        if(emps[i].id== oldEmp.id){
          emps[i]=newEmp;
        }
     }
     localStorage.setItem('employee', JSON.stringify(emps))
  }
}
