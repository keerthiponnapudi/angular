import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:any;
  employee:any;
  employee1:any;
  constructor( private _Activatedroute:ActivatedRoute, private empservice: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps= this.empservice.getEmployeeList();
    this.employee=emps.find( (p: { id: any; }) =>p.id == this.id);
    this.employee1=emps.find( (p: { id: any; }) =>p.id == this.id);
    console.log(this.employee);
  }
  onSubmit(){
    this.empservice.updateEmployee(this.employee1, this.employee);
    this.router.navigate(['/employees']);
  }

}
