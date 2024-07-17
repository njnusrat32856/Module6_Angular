import { Component, OnInit } from '@angular/core';
import { StudentserviceService } from '../studentservice.service';
import { LocationService } from '../../location/location.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit{
  
  students: any;
  locations: any;

  constructor(
    private studentService: StudentserviceService,
    private locationService: LocationService
  ) {}
  
  ngOnInit(): void {
    this.locations = this.locationService.getAllLocation();
    this.students = this.studentService.viewAllStudent();
  }

}
