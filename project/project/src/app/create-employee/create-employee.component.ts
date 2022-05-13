import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee =new Employee();
  constructor(private empService: ServiceService, private router:Router ) { }
  @ViewChild('f') form :any;
  ngOnInit(): void {
  }

  saveEmployee(){
    /*this.empService.createEmployee(this.employee).subscribe( data =>{
      console.log(data)
      this.goToEmployeeList();
    },
      (error: any) =>console.log(error));*/
     this.employee.id= "id"+ Math.random().toString(16).slice(2);
      //this.employee=Object.assign({id:'id'},  this.employee)
      debugger;
      this.empService.createEmployee(this.employee);
      this.router.navigate(['/employees'])
  }


  onSubmit(){
   console.log(this.employee);
   this.saveEmployee();
  }

}
