import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response, URLSearchParams } from '@angular/http';
/**
 * Generated class for the MapboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import leaflet from 'leaflet';

@IonicPage()
@Component({
  selector: 'page-mapbox',
  templateUrl: 'mapbox.html',
})
export class MapboxPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private http: Http,public navParams: NavParams) {
    this.http.get('http://localhost:8080/Limite_Bairro.geojson').toPromise().then(response => {
     console.log(response);
    });
  }
  ionViewDidEnter() {
    this.loadmap();
  }
  loadmap() {

    
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer(  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(this.map);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapboxPage');
  }

}
