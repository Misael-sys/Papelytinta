import { ClientesService } from './../servicios/clientes.service';
import { Cliente } from './../servicios/clientes';
import { Router } from '@angular/router';
import { TableData1 } from './../../md/md-table/md-table.component';
import { Component, OnInit,  } from '@angular/core';


declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
}

declare var $:any;
declare var swal:any;



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})

export class ClientesComponent implements OnInit {

  
  clientes =null;
  
  cliente ={
    id: null,
    nombre: null,
    apellido: null,
    telefono: null,
    correo : null,
    direccion: null,
  }

  public tableData1: TableData1;
  public typeValidation: User;

  constructor( private router: Router, private clienteService: ClientesService) { }

  ngOnInit() {

    this.obtenerClientes();
    
    this.typeValidation = {
        text: '',
        email: '',
    }

  this.prueba();
    
this.tableData1 = {
      headerRow: [ 'ID', 'Nombre', 'Apellido', 'Telefono', 'Correo', 'Direccion', 'Acciones'],
   };
  
    
  }
/*
  obtenerAdministradores() {
    return this.adminService
      .getAdministradores()
      .subscribe((admins: Admin[]) => this.admins = admins);
  }*/
  obtenerClientes() {
    this.clienteService.getClientes().subscribe(result => this.clientes = result);
  }

  

prueba(){
  console.log(this.clienteModel);
}

clienteModel = new Cliente('', '' , '' , '' ,'', undefined)

  addCliente() {
    this.clienteService.addCliente(this.clienteModel).subscribe(
        datos => {
            if (datos['resultado'] === 'OK') {
               
            } else {
              this.showSwal('success-message');
                this.prueba();
            }
        }
    );
    this.volver();
}

eliminarCliente(cliente: Cliente) {
  console.log(cliente.id)
      this.clienteService
        .deleteCliente(cliente)
        .subscribe(() => {
          this.obtenerClientes();
        });
        this.volver();
    }

    volver() {
      this.router.navigate(['/clientes']);
    }


  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }


    showSwal(type){
      if(type == 'success-message'){
        swal({
              type: "success",
              title: "Buen trabajo",
              text: "Se acaba de agregar un nuevo cliente",
              buttonsStyling: false,
              confirmButtonClass: "btn btn-info"
          });

        } window.location.reload();
      }

}
