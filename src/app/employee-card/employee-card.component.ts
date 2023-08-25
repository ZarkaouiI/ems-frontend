import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  @Input() id: number = 0;
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() email: string = '';

  @Output() employeeDeleted = new EventEmitter<number>();

  onEditEmployee(id: number) {
    // Navigate to edit page :
    this.router.navigate(['/edit-employee', id]);
  }

  onDeleteEmployee(id: number) {
    this.employeeDeleted.emit(id);
  }
}
