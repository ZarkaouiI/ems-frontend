import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  isLoading = false;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  deleteEmployee(id: number) {
    //do it.. 
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        //Update the UI : Hada howa jhdi for this one !
        this.fetchEmployees();
      },
      error: (err) => {
        console.log("There was an error .....");
        console.log(err);
      }
    });
  }

  private fetchEmployees() {
    this.isLoading = true;
    this.employeeService.getEmployees().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }
}
