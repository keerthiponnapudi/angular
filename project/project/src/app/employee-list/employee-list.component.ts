import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from "@angular/router"
 @Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:any;
  constructor( private employeeservice: ServiceService, private router:Router ) { }

  ngOnInit(): void {
    this.getEmployee();
  }
 /* getEmployee(){
    this.employeeservice.getEmployeeList().subscribe(data =>{
      this.employees=data;
      console.log(data)
    });
  }*/
  getEmployee(){
    this.employees=this.employeeservice.getEmployeeList();
  }
  updateEmployee(id:any){
    this.router.navigate(['update-employee', id])
  }
  deleteEmployee(id:any){
    for(let i=0; i< this.employees.length;i++){
      if(this.employees[i].id){
        this.employees.splice(i,1)
      }
    }
    this.employeeservice.deleteEmployee(id);
    this.getEmployee();
  }
}
