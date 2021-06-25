import { ProveedoresService } from './../../servicios/proveedores.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Proveedores } from 'app/vistasadmin/servicios/proveedores';



declare interface User {
  text?: string; // required, must be 5-8 characters
  email?: string; // required, must be valid email format
}

@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.component.html'
})

export class EditarProveedoresComponent implements OnInit {
  public typeValidation: User;

  proveedores = new Proveedores('', '' , '' , '' , '', '',  undefined)

  constructor(private route: ActivatedRoute,
    private router: Router, private proveedoresService: ProveedoresService) { }

    prueba(){
      console.log(this.proveedores);
    }

  ngOnInit() {

    this.typeValidation = {
      text: '',
      email: '',
  }

    this.prueba();
    let idProveedor = this.route.snapshot.paramMap.get("id");
    this.proveedoresService.getProveedor(idProveedor).subscribe((proveedor: Proveedores) => this.proveedores = proveedor)
  }

  volver() {
    this.router.navigate(['/proveedores']);
  }

  cancel() {
    this.router.navigate(['/proveedores']);
  }

  editarProveedor(){
    this.proveedoresService.updateProveedor(this.proveedores).subscribe(() => {
    });
    this.volver();
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
