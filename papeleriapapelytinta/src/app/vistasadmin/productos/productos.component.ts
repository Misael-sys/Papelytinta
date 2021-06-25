import { ProveedoresService } from './../servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';
import { Productos } from '../servicios/productos';
import { CategService } from './../servicios/categoria.service';
import { ProductosService } from '../servicios/productos.service';
import { Router } from '@angular/router';

declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
  number?: number;
}

declare var $: any;
declare var swal: any;



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  public typeValidation: User;
  productosModel = new Productos('', '', undefined, undefined, '', '', '', '', undefined, undefined)

  categorias = null;

  categ = {
    id: null,
    nombre: null,
    descripcion: null,
  }

  proveedores = null;

  proveedor = {
    id: null,
    dni: null,
    nombre: null,
    apellido: null,
    direccion: null,
    correo: null,
    telefono: null,
  }

 

  constructor(private categService: CategService, private provedoresService: ProveedoresService, private productoServ: ProductosService,
    private router: Router) { }

  ngOnInit() {
    this.typeValidation = {
      text: '',
      email: '',
    }








    this.obtenerCategorias();

    this.obtenerProveedores();


  }






  addProd() {
    this.productoServ.addProducto(this.productosModel).subscribe(
      datos => {
        if (datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
        } else {
          this.showSwal('success-message');
          
        }
      }
    );

  }
  prueba() {
    console.log(this.productosModel);
  }




  obtenerCategorias() {
    this.categService.getCategorias().subscribe(result => this.categorias = result);
  }

  obtenerProveedores() {
    this.provedoresService.getProveedores().subscribe(result => this.proveedores = result);
  }

  

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
  onSubmit(value: any): void {
    console.log(value);
  }

  showSwal(type) {
    if (type == 'success-message') {
      swal({
        type: "success",
        title: "Buen trabajo",
        text: "Se acaba de agregar un nuevo producto",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info"

      });
      
    }
    this.router.navigateByUrl('/inventario');
  }




}
