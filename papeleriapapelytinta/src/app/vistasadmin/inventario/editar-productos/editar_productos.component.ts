import { ProveedoresService } from 'app/vistasadmin/servicios/proveedores.service';
import { Component, OnInit } from '@angular/core';
import { Productos } from '../../servicios/productos';
import { CategService } from '../../servicios/categoria.service';
import { ProductosService } from '../../servicios/productos.service';
import { Router, ActivatedRoute } from '@angular/router';


declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
  number?: number;
}

declare var $: any;
declare var swal: any;



@Component({
  selector: 'app-productos',
  templateUrl: './editar_productos.component.html'
})
export class EditarProductosComponent implements OnInit {

  public typeValidation: User;
  producto = new Productos('', '', undefined, undefined, '', '', '', '', undefined, undefined)

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


  constructor(private categService: CategService, private provedoresService: ProveedoresService, private route: ActivatedRoute,
    private productoServ: ProductosService, private router: Router) { }

  ngOnInit() {
    
    this.typeValidation = {
      text: '',
      email: '',
    }

    this.obtenerCategorias();

    this.obtenerProveedores();

    let idProducto = this.route.snapshot.paramMap.get("id");
    this.productoServ.getProducto(idProducto).subscribe((producto: Productos) => this.producto = producto)

  }



  editarProducto() {
    this.productoServ.updateProducto(this.producto).subscribe(() => { });
    this.volver();
  }


  
  prueba() {
    console.log(this.producto);
  }


  obtenerCategorias() {
    this.categService.getCategorias().subscribe(result => this.categorias = result);
  }

  obtenerProveedores() {
    this.provedoresService.getProveedores().subscribe(result => this.proveedores = result);
  }

  volver(){
    this.router.navigateByUrl('/inventario');
  }

  cancel(){
    this.router.navigateByUrl('/inventario');
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
  

  




}
