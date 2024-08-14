import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../model/student.model';
import { LocationModel } from '../../model/location.model';
import { StudentService } from '../../services/student.service';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-viewst',
  templateUrl: './viewst.component.html',
  styleUrl: './viewst.component.css'
})
export class ViewstComponent implements OnInit{

  students: StudentModel[] = [];
  locations: LocationModel[] = [];

  constructor(
    private studentService: StudentService,
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
    this.router.navigate(['/updatest', student.id]);
  }
}
