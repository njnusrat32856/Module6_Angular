import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../../location/location.model';
import { StudentModel } from '../student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../location/location.service';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent{
  
  studentForm !: FormGroup;
  locations: Location[] = [];
  studentId: string = "";
  student: StudentModel = new StudentModel();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService: LocationService,
    private studentService: StudentserviceService,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.studentId = this.route.snapshot.params['id'];

    console.log(this.studentId);

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
    
    this.loadLocation();
    this.loadStudentDetails();

  }

  loadLocation(): void{

    this.locationService.getLocationForStudent()
      .subscribe({
        next: (res: Location[]) => {
          this.locations = res;
        },
        error: err => {
          console.log(err);
        }
      });
  }

  loadStudentDetails(): void{
    this.studentService.getStudentById(this.studentId)
      .subscribe({
        next: (studentM: StudentModel) => {
          this.student =studentM;
          this.studentForm.patchValue({
            name: studentM.name,
            email: studentM.email,
            cellNo: studentM.cellNo,
            location: studentM.location
          });
        },
        error: err => {
          console.log(err);
        }
      });
  }

  updateStudent(): void {
    const updatedStudent: StudentModel = {
      ...this.student,
      ...this.studentForm.value
    };
    this.studentService.updateStudent(updatedStudent)
      .subscribe ({
        next: res => {
          console.log('Student Updated Successfully: ', res);
          this.router.navigate(['student']); //Navigate to the students list after update
        },
        error: err => {
          console.log('Error updating student: ', err);
        }
      });
  }

}
