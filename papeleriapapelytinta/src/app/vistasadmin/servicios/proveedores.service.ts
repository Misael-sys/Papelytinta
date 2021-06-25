import { Proveedores } from './proveedores';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  baseUrl = environment.UrlProveedores

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get(`${this.baseUrl}/getProveedores.php`);
  }

  deleteProveedor(proveedor: Proveedores) {
    return this.http.delete(`${this.baseUrl}/deleteProveedor.php?idProveedor=${proveedor.id}`);
  }

  addProveedor(proveedor: Proveedores) {
    return this.http.post(`${this.baseUrl}/addProveedor.php`, proveedor);
  }

  getProveedor(id: string | number) {
    return this.http.get(`${this.baseUrl}/getProveedor.php?idProveedor=${id}`);
  }


  updateProveedor(proveedor: Proveedores) {
    return this.http.put(`${this.baseUrl}/updateProveedor.php`, proveedor);
  }
}
