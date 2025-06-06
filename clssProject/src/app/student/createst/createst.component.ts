import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../model/location.model';
import { StudentModel } from '../../model/student.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createst',
  templateUrl: './createst.component.html',
  styleUrl: './createst.component.css'
})
export class CreatestComponent implements OnInit{

  locations: LocationModel[] =[];
  students: StudentModel[] = [];
  studentForm !: FormGroup;
  student: StudentModel = new StudentModel();

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}


  ngOnInit(): void {
    this.loadLocation();

    this.studentForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cellNo: [''],
      location: this.formBuilder.group({
        id: [undefined],
        name: [undefined,],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })
    });

    this.studentForm.get('location')?.get('name')?.valueChanges
      .subscribe(name =>{
        const selectedLocation = this.locations.find(loc => loc.name === name);
        if (selectedLocation) {
          this.studentForm.patchValue({ location: selectedLocation});
        }
      });
  }

  loadLocation() {
    this.locationService.getLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: err => {
          console.log(err);
        }
      });
  }

  createStudent(){
    this.student.name = this.studentForm.value.name;
    this.student.email = this.studentForm.value.email;
    this.student.cellNo = this.studentForm.value.cellNo;
    this.student.location = this.studentForm.value.location;

    this.studentService.createStudent(this.student)
      .subscribe({
        next: res => {
          this.loadLocation();
          this.studentForm.reset();
          this.router.navigate(['/student']);
        },
        error: err => {
          console.log(err);
        }
      });
  }
}
