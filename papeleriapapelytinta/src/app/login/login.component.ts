import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';


declare var $: any;
declare var swal: any;
declare var ventana4:any;//para utilizar las funciones de javascript

declare interface User {
    text?: string; // required, must be 5-8 characters
    email?: string; // required, must be valid email format
}


@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    test: Date = new Date();

    contacto: FormGroup;
    submitted = false;

    contacto2 = {
        idPersona: null,
        email: null,
        password: null
      }

    public typeValidation: User;


    constructor(private loginService: LoginService, public router: Router,
         private formBuilder: FormBuilder , private cookieService: CookieService) { }

    /*loginUsuario() {
        this.loginService.loginUsuario(this.login).subscribe(
            datos => {
                if (datos['resultado'] === 'OK') {
                    alert(datos['mensaje']);
                    this.router.navigateByUrl('/dashboard');
                } else {
                    alert(datos['mensaje']);
                }
            }
        );
    }*/

    ngOnInit() {

        this.typeValidation = {
            text: '',
            email: '',
        }

        this.checkFullPageBackgroundImage();

        this.contacto = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

    }



    get f() { return this.contacto.controls; }



    IniciarSeccion() { //funcion de formulario iniciar seccion

        this.submitted = true;

        if (this.contacto.invalid) {
            return;
        }
        //alert('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
        //console.log('Mensaje Enviado !'+JSON.stringify(this.contacto.value))

        this.Iniciar_seccion(this.contacto);

    }





    


    Iniciar_seccion(contacto) {

        this.loginService.loginUsuario(contacto.value.email, contacto.value.password)
            .subscribe(
                data => {
                    if (data['resultado'] === 'OK') {
                        this.showSwal('success-message');
                        this.router.navigateByUrl('/dashboard');
                    } else {
                        this.showSwal('warning-message-and-confirmation');
                    }
                });
    }
    //get email() { return this.contacto.get('email'); }
    //get password() { return this.contacto.get('password'); }




    showSwal(type){
        if(type == 'success-message'){
          swal({
                type: "success",
                title: "Buen trabajo",
                text: "Login correcto",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-info"
            });
          }
         if(type == 'warning-message-and-confirmation'){
              swal({
                    type: "warning",
                    title: "Error",
                    text: "Login incorrecto",
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-info"
                });
              }
        }








    save(model: User, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);
    }
    onSubmit(value: any): void {
        console.log(value);
    }

    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };



}
