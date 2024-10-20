import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.css'
})

export class RegistrazioneComponent {

  constructor(private router: Router) {}

  utente = {

    username: '',
    email: '',
    password: '',
    
  }

  onSubmit(form: NgForm) {
    if(form.valid){
      console.log(`Credenziali utente: ${this.utente.username}, ${this.utente.email}, ${this.utente.password}`);
      this.router.navigate(['/conferma-accesso']);
    } else {
      alert("Ci dev'essere un errore con l'inserimento delle credenziali, riprova a compilare i campi in modo corretto.")
    }
  }

}
