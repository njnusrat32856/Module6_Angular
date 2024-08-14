import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewlo',
  templateUrl: './viewlo.component.html',
  styleUrl: './viewlo.component.css'
})
export class ViewloComponent implements OnInit{

  locations: any;

  constructor(
    private locationService: LocationService,
    private router: Router
    
  ) { }
  ngOnInit(): void {
    this.locations = this.locationService.getAllLocation();
  }

  deleteLocation(id: string) {
    this.locationService.deleteLocation(id)
      .subscribe({
        next: res =>{

          this.locations = this.locationService.getAllLocation();
          this.router.navigate(['/location']);
        },

        error: error =>{
          console.log(error);
        }
      });
  }
  updateLocation(id: string){
    this.router.navigate(['/updatelocation', id]);
  }
}
