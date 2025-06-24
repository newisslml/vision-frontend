import { Component } from '@angular/core';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonRow, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol]
})
export class HomePage {
    constructor(private navCtrl: NavController, private alertController: AlertController) {

    }

    irACamaras() {
        this.navCtrl.navigateForward("/camaras");
    }


    async mostrarAlerta() {
        const alerta = await this.alertController.create({
            header: '¡Ops...!',
            subHeader: 'En proceso',
            message: 'Trabajando para habilitar esta opcion.',
            buttons: ['OK']
        });

        await alerta.present();
    }
}

