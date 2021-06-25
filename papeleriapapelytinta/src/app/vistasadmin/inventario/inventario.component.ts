import { Component, OnInit } from '@angular/core';
import { TableData1 } from './../../md/md-table/md-table.component';
import { ProductosService } from '../servicios/productos.service';
import { Productos } from '../servicios/productos';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {

  constructor(private productoServ: ProductosService) { }

  productos = null;

  producto = {
    id: null,
    nombre: null,
    codigo: null,
    unidades: null,
    precio: null,
    categoria: null,
    proveedor: null,
    marca: null,
    estado: null,
    fecha: null,
  }

  public tableData1: TableData1;

  ngOnInit() {
    this.tableData1 = {
      headerRow: ['ID', 'Nombre', 'Codigo', 'Unidades', 'Precio', 'Categoria', 'Proveedor', 'Marca', 'Fecha', 'Estado', 'Acciones'],
    };

    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoServ.getProductos().subscribe(result => this.productos = result);
  }

  eliminarProducto(producto: Productos) {
    console.log(producto.id)
    this.productoServ
      .deleteProducto(producto)
      .subscribe(() => {
        this.obtenerProductos();
      });

  }

}
