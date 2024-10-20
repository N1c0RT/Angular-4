import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ConfermaAccessoComponent } from './components/conferma-accesso/conferma-accesso.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AccessoComponent } from './components/accesso/accesso.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RegistrazioneComponent,ConfermaAccessoComponent, PageNotFoundComponent, ReactiveFormComponent, AccessoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-4';

  

  
}
