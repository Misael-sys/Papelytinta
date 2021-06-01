import { ClientesService } from './../../servicios/clientes.service';
import { Cliente } from './../../servicios/clientes';
import { FormsModule } from '@angular/forms';


import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';



declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
}

@Component({
  selector: 'app-editarclientes',
  templateUrl: './editarclientes.component.html'
})

export class EditarClientesComponent implements OnInit {
  public typeValidation: User;

  cliente = new Cliente('', '' , '' , '' ,'', undefined)

  constructor(private route: ActivatedRoute,
    private router: Router, private clienteService: ClientesService) { }

    prueba(){
      console.log(this.cliente);
    }

  ngOnInit() {

    this.typeValidation = {
      text: '',
      email: '',
  }

    this.prueba();
    let idCliente = this.route.snapshot.paramMap.get("id");
    this.clienteService.getCliente(idCliente).subscribe((cliente: Cliente) => this.cliente = cliente)
  }

  volver() {
    this.router.navigate(['/clientes']);
  }

  onSubmit() {
    this.clienteService.updateCliente(this.cliente).subscribe(() => {
    });this.volver();
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
