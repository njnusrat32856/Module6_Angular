import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { LocationModel } from '../../model/location.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatelo',
  templateUrl: './updatelo.component.html',
  styleUrl: './updatelo.component.css'
})
export class UpdateloComponent implements OnInit {

  id: string = "";
  location: LocationModel = new LocationModel();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.location = new LocationModel();
    this.id = this.route.snapshot.params['id'];
    this.locationService.getById(this.id)
      .subscribe({
        next: res => {
          this.location = res;
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  updateLocation() {
    this.locationService.updateLocation(this.id, this.location)
      .subscribe({
        next: res => {
          // this.location = new Location();
          this.router.navigate(['location']);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  
}
