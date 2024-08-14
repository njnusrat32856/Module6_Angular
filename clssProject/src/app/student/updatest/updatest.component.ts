import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationModel } from '../../model/location.model';
import { StudentModel } from '../../model/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-updatest',
  templateUrl: './updatest.component.html',
  styleUrl: './updatest.component.css'
})
export class UpdatestComponent implements OnInit {

  studentForm !: FormGroup;
  locations: LocationModel[] = [];
  studentId: string = "";
  student: StudentModel = new StudentModel();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService: LocationService,
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

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

  loadLocation(): void {

    this.locationService.getLocationForStudent()
      .subscribe({
        next: (res: LocationModel[]) => {
          this.locations = res;
        },
        error: err => {
          console.log(err);
        }
      });
  }

  loadStudentDetails(): void {
    this.studentService.getStudentById(this.studentId)
      .subscribe({
        next: (studentM: StudentModel) => {
          this.student = studentM;
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
      .subscribe({
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
