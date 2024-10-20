import { Routes } from '@angular/router';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ConfermaAccessoComponent } from './components/conferma-accesso/conferma-accesso.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { AccessoComponent } from './components/accesso/accesso.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';


export const routes: Routes = [
    {path: '', component: ReactiveFormComponent},
    {path: 'registrazione', component: RegistrazioneComponent},
    {path: 'conferma-accesso', component: ConfermaAccessoComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'accesso', component: AccessoComponent},
    {path: 'home', component: HomeComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: '**', component: PageNotFoundComponent},
];
