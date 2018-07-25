import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {PesonasPage} from '../pesonas/pesonas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  lista : Array<any>=[
    {
      nombre:"Soy Juan",
      edad:"tengo 24 años"
    },
    {
      nombre:"Soy Lina",
      edad:"Tengo 22 años"
    },
    {
      nombre:"Soy Sandra",
      edad:"Tengo 53 años"
    },
    ];

  constructor(public navCtrl: NavController) {

  }

  detalles(){

    this.navCtrl.push(PesonasPage,{nombre,edad});
  }

}
