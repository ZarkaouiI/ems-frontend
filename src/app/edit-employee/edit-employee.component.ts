import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit, OnDestroy {
  idSubsciption!: Subscription;
  employeeSubscription!: Subscription;

  isLoading = false;

  employeeId!: number;
  employee !: Employee;

  successMessage: string = '';
  errorMessage: string = '';

  updateEmployeeForm!: FormGroup;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //We need to get the id : 
    this.isLoading = true;
    this.idSubsciption = this.route.params.subscribe({
      next: (data: Params) => {
        this.employeeId = +data['id'];
        this.isLoading = false;
        console.log("iiiiiiiiiddddddddddd:", this.employeeId);
      }
    });

    // We get the employee to be edited : 
    this.isLoading = true;
    this.employeeSubscription = this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (emp: Employee) => {
        this.employee = emp;

        // Itialize our form :
        this.updateEmployeeForm = new FormGroup({
          'firstName': new FormControl(emp.firstName, [Validators.required]),
          'lastName': new FormControl(emp.lastName, [Validators.required]),
          'email': new FormControl(emp.email, [Validators.required, Validators.email])
        });
        this.isLoading = false;
      });

    this.updateEmployeeForm = new FormGroup({
      'firstName': new FormControl('', [Validators.required]),
      'lastName': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }


  onUpdateEmployee() {
    //submit the thing:
    this.employeeService.editEmployee(this.employeeId, this.updateEmployeeForm.value).subscribe({
      next: () => {
        this.successMessage = "The Employee Was Successfully Updated!";
        setTimeout(() => {
          this.router.navigate(['/employees']);
        }, 1000)
      },
      error: (err) => {
        this.errorMessage = "There was an error updating employee. Try later";
        console.log(err);
      }
    });
  }

  onClearForm() {
    this.updateEmployeeForm.reset();
  }

  ngOnDestroy(): void {
    this.idSubsciption.unsubscribe();
    this.employeeSubscription.unsubscribe();
  }
}
