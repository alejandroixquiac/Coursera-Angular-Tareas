import { Component,OnInit,HostBinding,Input } from '@angular/core';
import { PuntoEvaluar } from '../models/punto-evaluar.models';

@Component({
  selector: 'app-punto-evaluar',
  templateUrl: './punto-evaluar.component.html',
  styleUrls: ['./punto-evaluar.component.css']
})
export class PuntoEvaluarComponent implements OnInit {
  @Input() punto:PuntoEvaluar;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor(){
    this.punto = new PuntoEvaluar('');
  }
  ngOnInit(): void {}
}
