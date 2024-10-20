import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-accesso',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './accesso.component.html',
  styleUrl: './accesso.component.css'
})
export class AccessoComponent {

  form = new FormGroup({

    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

    numeri: new FormArray([], [Validators.required]),
  })

    get numeri() {
      return this.form.get('numeri') as FormArray;
    }
  
    addNumero(){
      this.numeri.push(new FormControl(''))
    }
  
  
    sendData(){
      console.log(this.form.get('nome')?.value)
      if(this.form.valid){
        console.log(this.form.value)
      } else {
        alert("Qualcosa è andato storto nella compilazione")
      }
    }

  
}
