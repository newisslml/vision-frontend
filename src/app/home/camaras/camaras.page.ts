import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonContent, IonTitle, IonToolbar, NavController, IonHeader, IonIcon } from '@ionic/angular/standalone';

@Component({
    selector: 'app-camaras',
    templateUrl: 'camaras.page.html',
    styleUrls: ['camaras.page.scss'],
    imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, NgFor, IonIcon]
})
export class CamarasPage {
    constructor(private navCtrl: NavController) { }

    listadoCamaras = [
        { nombre: 'Cámara 1', url: 'http://lalalalalala' },
        { nombre: 'Cámara 2', url: 'http://lalalalalala' },
        { nombre: 'Cámara 3', url: 'http://lalalalalala' }
    ];
}