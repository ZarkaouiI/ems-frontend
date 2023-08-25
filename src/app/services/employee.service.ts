import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private backendUrl = 'http://localhost:8080/api/v1/employees';

  employeesChanged = new Subject<Employee[]>();

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.backendUrl);
  }


  addNewEmployee(employee: Employee) {
    return this.http.post(this.backendUrl, {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
    });
  }

  getEmployeeById(id : number) : Observable<Employee> {
    return this.http.get<Employee>(`${this.backendUrl}/${id}`);
  }

  editEmployee(id: number, employee: Employee) {
    return this.http.put<Employee>(`${this.backendUrl}/${id}`, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.backendUrl + `/${id}`);
  }

}
