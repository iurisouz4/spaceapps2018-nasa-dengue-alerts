import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {Infos} from './infos'

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infs: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
  
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    var heatmapData = [];
    this.infs = Infos.getbarra();
    this.infs.geometry.coordinates[0].forEach(item => {
      heatmapData.push(new google.maps.LatLng(item[1], item[0]));
    })
    var heatmapData2 = [];
    this.infs = Infos.getguaratiba();
    this.infs.geometry.coordinates[0][0].forEach(item => {
      heatmapData2.push(new google.maps.LatLng(item[1], item[0]));
    })

    var heatmapData3 = [];
    this.infs = Infos.getiraja();
    this.infs.geometry.coordinates[0].forEach(item => {
      heatmapData3.push(new google.maps.LatLng(item[1], item[0]));
    })

    var heatmapData4= [];
    this.infs = Infos.getsantacruz()
    this.infs.geometry.coordinates[0].forEach(item => {
      heatmapData4.push(new google.maps.LatLng(item[1], item[0]));
    })

    var heatmapData5= [];
    this.infs = Infos.getsaocristovao()
    this.infs.geometry.coordinates[0].forEach(item => {
      heatmapData5.push(new google.maps.LatLng(item[1], item[0]));
    })

    
    var heatmapData6= [];
    this.infs = Infos.gettijuca()
    this.infs.geometry.coordinates[0].forEach(item => {
      heatmapData6.push(new google.maps.LatLng(item[1], item[0]));
    })
    var heatmapData7= [];
    this.infs = Infos.getlagoa()
    this.infs.geometry.coordinates[0].forEach(item => {
      heatmapData7.push(new google.maps.LatLng(item[1], item[0]));
    })



    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      var bermudaTriangle = new google.maps.Polygon({
        paths: heatmapData,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      var bermudaTriangle2 = new google.maps.Polygon({
        paths: heatmapData2,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      var bermudaTriangle3 = new google.maps.Polygon({
        paths: heatmapData3,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      var bermudaTriangle4 = new google.maps.Polygon({
        paths: heatmapData4,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      var bermudaTriangle5 = new google.maps.Polygon({
        paths: heatmapData5,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      var bermudaTriangle6 = new google.maps.Polygon({
        paths: heatmapData6,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      var bermudaTriangle7 = new google.maps.Polygon({
        paths: heatmapData7,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });
      bermudaTriangle.setMap(this.map);
      
      bermudaTriangle2.setMap(this.map);

      bermudaTriangle3.setMap(this.map);
      
      bermudaTriangle4.setMap(this.map);
      
      bermudaTriangle5.setMap(this.map);
      
      bermudaTriangle6.setMap(this.map);


      bermudaTriangle7.setMap(this.map);




      // var heatmap = new google.maps.visualization.HeatmapLayer({
      //   data: heatmapData
      // });

      // heatmap.setMap(this.map);

    }, (err) => {
      console.log(err);
    });


  }
}