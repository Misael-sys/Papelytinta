import { FormsModule } from '@angular/forms';
import { CategService } from './../../servicios/categoria.service';
import { Categoria } from './../../servicios/categoria';

import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';



declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
}

@Component({
  selector: 'app-editarcategorias',
  templateUrl: './editarcategorias.component.html'
})

export class EditarcategoriasComponent implements OnInit {
  public typeValidation: User;

  categ = new Categoria ('' , '' , undefined)

  constructor(private route: ActivatedRoute,
    private router: Router, private categService: CategService) { }

    prueba(){
      console.log(this.categ);
    }

  ngOnInit() {

    this.typeValidation = {
      text: '',
      email: '',
  }

    this.prueba();
    let idCateg = this.route.snapshot.paramMap.get("id");
    this.categService.getCategoria(idCateg).subscribe((categ: Categoria) => this.categ = categ)
  }

  volver() {
    this.router.navigate(['/categorias']);
  }

  onSubmit() {
    this.categService.updateCategoria(this.categ).subscribe(() => {
    });this.volver();
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
