import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depName: string = '';
  departments: Department[] = [
    {name: "dep 1",_id: "anarocha"},
    {name: "dep 1",_id: "anarocha"},
    {name: "dep 1",_id: "anarocha"},
    {name: "dep 1",_id: "anarocha"},
  ];

  constructor(
    private departmentService: DepartmentService) {}

  ngOnInit() {
  }

  save() {
  }

  cancel() {
  }

  edit(dep: Department) {

  }

  delete(dep: Department) {

  }

}
