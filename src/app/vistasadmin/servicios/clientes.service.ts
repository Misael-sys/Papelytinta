import { Cliente } from './clientes';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  baseUrl = environment.Urlclientes

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.baseUrl}/getClientes.php`);
  }

  deleteCliente(cliente: Cliente) {
    return this.http.delete(`${this.baseUrl}/deleteCliente.php?idCliente=${cliente.id}`);
  }

  addCliente(cliente: Cliente) {
    return this.http.post(`${this.baseUrl}/addCliente.php`, cliente);
  }

  getCliente(id: string | number) {
    return this.http.get(`${this.baseUrl}/getCliente.php?idCliente=${id}`);
  }


  updateCliente(cliente: Cliente) {
    return this.http.put(`${this.baseUrl}/updateCliente.php`, cliente);
  }
}
