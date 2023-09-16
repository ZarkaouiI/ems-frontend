import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  isLoading = false;
  addEmployeeForm!: FormGroup;
  message: string = '';
  errorMessage: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onAddEmployee() {
    this.isLoading = true;
    this.employeeService.addNewEmployee(this.addEmployeeForm.value).subscribe({
      next: () => {
        this.onClearForm();
        this.isLoading = false;
        this.message = "Employee Was Successfully Added!";
        // This is what i could came up with to show the message before navigating to the employees page!
        setTimeout(() => {
          this.router.navigate(['/employees']);
        }, 1000);
      } ,
      error: err => {
        console.log(err);
        this.isLoading = false;
        this.errorMessage = "There was an error adding this employee. Please try again!";
      }
    });
  }

  onClearForm() {
    this.addEmployeeForm.reset();
  }

  ngOnDestroy(): void {
    // this.addEmployeeSubscription.unsubscribe();
  }
}
