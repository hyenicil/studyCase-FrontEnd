 import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoogleMapsProject';
  constructor() {}
    ngOnInit(): void {}
    display:any;
    center: google.maps.LatLngLiteral = {
        lat: 40.98994700131765,
        lng: 28.71852526847053
    };
    zoom = 4;
    markerOptions: google.maps.MarkerOptions = {
        draggable: false
    };
    markerPositions: google.maps.LatLngLiteral[] = [];
    addMarker(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
    }
    moveMap(event:google.maps.MapMouseEvent){
      if(event.latLng!=null)
      this.center = (event.latLng.toJSON())
    }
    move(event: google.maps.MapMouseEvent){
      if(event.latLng!=null)
      this.display= event.latLng.toJSON();
    }


}
