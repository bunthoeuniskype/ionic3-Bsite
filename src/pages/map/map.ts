import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates } from 'ionic-native';
 import {GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';
/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

private map: GoogleMap = null;
private coords: Coordinates = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    Geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords;
    }).catch((error) => {
      this.coords = null;
    });
 }

coordsToJSON(coordinates: Coordinates) : Coordinates {
  return {
    accuracy: coordinates.accuracy,
    altitude: coordinates.altitude,
    altitudeAccuracy: coordinates.altitudeAccuracy,
    heading: coordinates.heading,
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    speed: coordinates.speed,
  };
}

ngAfterViewInit() {
    this.initMap();
  }

 initMap() {
    const element: HTMLElement = document.getElementById('map');

    this.map = new GoogleMap(element);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!')
    });
  }

}
