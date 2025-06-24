import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonContent, IonButton, IonItem, IonInput, IonText, IonLabel, IonCheckbox } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  imports: [IonText, IonInput, IonItem, IonButton, IonContent, IonLabel, IonCheckbox],
})
export class LoginPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
