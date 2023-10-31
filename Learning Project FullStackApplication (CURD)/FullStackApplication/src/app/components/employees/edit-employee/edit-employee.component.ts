import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Import Router
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router // Router is now correctly imported
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const id = params['id'];
        if (id) {
           this.employeeService.getEmployee(id).subscribe({
              next: (employee: Employee) => {
                this.employeeDetails = employee;
              }
            });
        }
      }
    });
  }

  updateEmployee() { // updateEmployee method is now correctly placed
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: () => { // response is removed as it's not used
        this.router.navigate(['/employees']);
      }
    });
  }

   deleteEmployee(id: string) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        }
      });
    }
}