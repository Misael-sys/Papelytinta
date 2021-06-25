import { Categoria } from './categoria';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategService {
  baseUrl = environment.Urlcategorias

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.baseUrl}/getCategorias.php`);
  }

  deleteCategoria(categ: Categoria) {
    return this.http.delete(`${this.baseUrl}/deleteCateg.php?idCateg=${categ.id}`);
  }

  addCateg(categ: Categoria) {
    return this.http.post(`${this.baseUrl}/addCateg.php`, categ);
  }

  getCategoria(id: string | number) {
    return this.http.get(`${this.baseUrl}/getCateg.php?idCateg=${id}`);
  }


  updateCategoria(categ: Categoria) {
    return this.http.put(`${this.baseUrl}/updateCateg.php`, categ);
  }
}
