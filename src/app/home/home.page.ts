import { Component } from '@angular/core';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol]
})
export class HomePage {
    constructor(private navCtrl: NavController) { }

    irAOpcion(opcion: string) {
        console.log('Navegar a:', opcion);
        // Aquí podrías redirigir según la opción
        // this.navCtrl.navigateForward(`/ruta-${opcion}`);
    }
}