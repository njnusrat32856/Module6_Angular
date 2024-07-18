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
export class ViewstudentComponent implements OnInit{
  
  students: StudentModel[] = [];
  locations: Location[] = [];

  constructor(
    private studentService: StudentserviceService,
    private locationService: LocationService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      locations: this.locationService.getLocationForStudent(),
      students: this.studentService.viewAllStudent()
    }).subscribe({
      next: ({ locations, students }) =>{
        this.locations = locations;
        this.students = students;
      },
      error: err => {
        console.log(err);
      }
    });
  }


}
