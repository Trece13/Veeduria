import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PesonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesonas',
  templateUrl: 'pesonas.html',
})
export class PesonasPage {

  public edad;
  public nombre;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.edad= navParams.get("edad");
    this.nombre =  navParams.get("nombre");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesonasPage');
  }

}
