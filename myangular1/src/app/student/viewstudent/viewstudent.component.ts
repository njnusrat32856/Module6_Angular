import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { LocationService } from '../../location/location.service';
import { StudentModel } from '../student.model';
import { Location } from '../../location/location.model';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {

  students: StudentModel[] = [];
  locations: Location[] = [];

  constructor(
    private studentService: StudentserviceService,
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      locations: this.locationService.getLocationForStudent(),
      students: this.studentService.viewAllStudent()
    }).subscribe({
      next: ({ locations, students }) => {
        this.locations = locations;
        this.students = students;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  deleteStudent(studentId: string): void {
    this.studentService.deleteStudent(studentId)
      .subscribe({
        next: res => {
          this.loadData(); // Refresh the list after deletion
        },
        error: err => {
          console.log(err);
        }
      });
  }

  editStudent(student: StudentModel): void{
    // Navigate to the edit student component with the student's ID
    this.router.navigate(['/updatestudent', student.id]);
  }

}
