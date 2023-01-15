import { Component,OnInit } from '@angular/core';
import { PuntoEvaluar } from './../models/punto-evaluar.models';

@Component({
  selector: 'app-tarea1',
  templateUrl: './tarea1.component.html',
  styleUrls: ['./tarea1.component.css']
})
export class Tarea1Component implements OnInit {
  nombres :string;
  apellidos :string;
  puntos :PuntoEvaluar[];

  constructor(){
    this.puntos = [];
    this.nombres = 'Eddy Alejandro';
    this.apellidos = 'Ixquiac Alquejay';
    this.guardar('Instalar Bootstrap');
    this.guardar('CSS Bootstrap');
    this.guardar('sintaxis {{ }} de variable Typescript');
    this.guardar('Uso de @HostBinding');
  }
  ngOnInit(): void { }

  guardar(punto:string):boolean{
    this.puntos.push(new PuntoEvaluar(punto));
    console.log(this.puntos);
    return false;
  }
}
