import { Productos } from './productos';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  baseUrl = environment.UrlProductos

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.baseUrl}/getProductos.php`);
  }

  deleteProducto(producto: Productos) {
    return this.http.delete(`${this.baseUrl}/deleteProducto.php?idProducto=${producto.id}`);
  }

  addProducto(producto: Productos) {
    return this.http.post(`${this.baseUrl}/addProducto.php`, producto);
  }

  getProducto(id: string | number) {
    return this.http.get(`${this.baseUrl}/getProducto.php?idProducto=${id}`);
  }


  updateProducto(producto: Productos) {
    return this.http.put(`${this.baseUrl}/updateProducto.php`, producto);
  }
}
