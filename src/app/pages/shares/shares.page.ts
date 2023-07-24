import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import productsData from '../../../assets/products.json';

interface Location {
  name: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-shares',
  templateUrl: './shares.page.html',
  styleUrls: ['./shares.page.scss'],
})
export class SharesPage implements OnInit {
  private accessToken =
    'pk.eyJ1IjoianVrYW1vIiwiYSI6ImNsazMyb3V3ajA2MnYzcnRqMGdxNjVhYW8ifQ.iel_UZvJgf9r_Tq4Ls0new';
  private map: mapboxgl.Map | undefined;
  private marker: mapboxgl.Marker | undefined;

  // Variable para almacenar la ubicación seleccionada por el usuario
  selectedLocation: Location | undefined;

  // Arreglo de ubicaciones disponibles para el usuario
  locations: Location[] = [
    { name: 'Ubicación 1', lat: 40.7128, lng: -74.006 },
    { name: 'Ubicación 2', lat: 34.0522, lng: -118.2437 },
    // Agrega más ubicaciones según necesites
  ];

  constructor() {}

  ngOnInit() {
    this.obtenerUbicacionUsuario();
  }

  obtenerUbicacionUsuario() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log(lat, lng);

          if (!this.map) {
            this.map = this.crearMapa(lat, lng);
            this.mostrarMarcador(lat, lng);
          }
        },
        (error) => {
          console.log('Error al obtener la ubicación', error);
        }
      );
    } else {
      console.log('Geolocalización no soportada por el navegador');
    }
  }

  crearMapa(lat: number, lng: number): mapboxgl.Map {
    const zoomLevel = 16;
    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoomLevel,
      accessToken: this.accessToken, // Aquí se asigna el token de acceso
    });

    // Agregar el marcador inicialmente al centro del mapa
    this.marker = new mapboxgl.Marker({
      element: this.crearMarcadorHTML('red'),
    })
      .setLngLat([lng, lat])
      .addTo(map);

    return map;
  }

  mostrarMarcador(lat: number, lng: number) {
    // Actualizar la posición del marcador
    this.marker?.setLngLat([lng, lat]);
  }

  // Función para crear el HTML del marcador personalizado
  crearMarcadorHTML(color: string): HTMLElement {
    const el = document.createElement('div');
    el.style.width = '10px';
    el.style.height = '10px';
    el.style.borderRadius = '50%';
    el.style.backgroundColor = color;
    return el;
  }

  mostrarUbicacionSeleccionada() {
    if (this.selectedLocation) {
      // Obtener la latitud y longitud de la ubicación seleccionada
      const lat = this.selectedLocation.lat;
      const lng = this.selectedLocation.lng;

      // Verificar si ya existe un mapa
      if (this.map) {
        // Si ya existe un mapa, simplemente mueve el marcador a la nueva ubicación
        this.mostrarMarcador(lat, lng);
        this.map.setCenter([lng, lat]);
      } else {
        // Si no existe un mapa, crea uno nuevo con la nueva ubicación y el marcador
        this.map = this.crearMapa(lat, lng);
        this.mostrarMarcador(lat, lng);
      }
    }

    // ... (otros métodos)
  }
  localizarUbicacionUsuario() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(lat, lng);

        if (!this.map) {
          this.map = this.crearMapa(lat, lng);
        } else {
          this.mostrarMarcador(lat, lng);
          this.map.setCenter([lng, lat]);
        }
      }, (error) => {
        console.log('Error al obtener la ubicación', error);
      });
    } else {
      console.log('Geolocalización no soportada por el navegador');
    }
  }
}
