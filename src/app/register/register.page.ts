import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonContent, IonButton, IonItem, IonInput, IonText, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
  imports: [IonText, IonInput, IonItem, IonButton, IonContent, IonLabel],
})
export class RegisterPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }
}
