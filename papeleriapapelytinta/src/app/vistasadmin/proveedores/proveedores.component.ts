import { Router } from '@angular/router';
import { ProveedoresService } from './../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';
import {Proveedores} from './../servicios/proveedores';
import { TableData1 } from './../../md/md-table/md-table.component';

declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
}

declare var $:any;
declare var swal:any;

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html'
})
export class ProveedoresComponent implements OnInit {

  proveedores = null;
  
  proveedor = {
    id: null,
    dni: null,
    nombre: null,
    apellido: null,
    direccion: null,
    correo : null,
    telefono: null,
  }

  public tableData1: TableData1;
  public typeValidation: User;

  constructor( private router: Router, private provedoresService: ProveedoresService) { }

  ngOnInit() {

    this.obtenerProveedores();
    
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
  obtenerProveedores() {
    this.provedoresService.getProveedores().subscribe(result => this.proveedores = result);
  }

  

prueba(){
  console.log(this.proveedorModel);
}

proveedorModel = new Proveedores('', '', '' , '' , '' ,'', undefined)

  addProveedor() {
    this.provedoresService.addProveedor(this.proveedorModel).subscribe(
        datos => {
            if (datos['resultado'] === 'OK') {
                this.prueba();
            } else {
                this.showSwal('success-message'); 
               
            }
        }
    );
}

eliminarProveedor(proveedor: Proveedores) {
  console.log(proveedor.id)
      this.provedoresService
        .deleteProveedor(proveedor)
        .subscribe(() => {
          this.obtenerProveedores();
        });
        this.volver();
    }

    volver() {
      this.router.navigate(['/proveedores']);
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
              text: "Se acaba de agregar un nuevo proveedor",
              buttonsStyling: false,
              confirmButtonClass: "btn btn-info"
          });
        }
        window.location.reload();
      }

}
