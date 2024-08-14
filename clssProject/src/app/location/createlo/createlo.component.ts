import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';
import { LocationModel } from '../../model/location.model';

@Component({
  selector: 'app-createlo',
  templateUrl: './createlo.component.html',
  styleUrl: './createlo.component.css'
})
export class CreateloComponent implements OnInit {

  location : LocationModel = new LocationModel();
  formValue !: FormGroup;
  locationData: any;


  constructor(
    private locationService: LocationService,
    private router: Router,

    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      city: [''],
      state: [''],
      photo: [''],
      availableUnits: [''],
      wifi: [false],
      laundry: [false]
    }
    );
  }

  createLocation() {
    this.location.name = this.formValue.value.name;
    this.location.city = this.formValue.value.city;
    this.location.state = this.formValue.value.state;
    this.location.photo = this.formValue.value.photo;
    this.location.availableUnits = this.formValue.value.availableUnits;
    this.location.wifi = this.formValue.value.wifi;
    this.location.laundry = this.formValue.value.laundry;

    this.locationService.createLocation(this.location)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/location']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
}
