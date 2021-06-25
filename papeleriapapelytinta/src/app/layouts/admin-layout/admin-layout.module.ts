

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';

import { NotificationsComponent } from '../../notifications/notifications.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';


import { EditarAdminComponent } from './../../vistasadmin/admin/editar-admin/editar-admin.component';
import { ClientesComponent } from '../../vistasadmin/clientes/clientes.component';
import { VentasComponent } from '../../vistasadmin/ventas/ventas.component';
import { ProductosComponent } from '../../vistasadmin/productos/productos.component';
import { ProveedoresComponent } from '../../vistasadmin/proveedores/proveedores.component';
import { AdminComponent } from '../../vistasadmin/admin/admin.component';
import { CategoriasComponent } from '../../vistasadmin/categorias/categorias.component';
import { InventarioComponent } from '../../vistasadmin/inventario/inventario.component';
import { EditarcategoriasComponent } from './../../vistasadmin/categorias/editarcategorias/editarcategorias.component';
import { EditarClientesComponent } from './../../vistasadmin/clientes/editarclientes/editarclientes.component';
import { EditarProveedoresComponent } from './../../vistasadmin/proveedores/editarproveedor/editarproveedor.component';
import { EditarProductosComponent } from 'app/vistasadmin/inventario/editar-productos/editar_productos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    NotificationsComponent,
    ProductosComponent,
   ProveedoresComponent,
    CategoriasComponent,
      InventarioComponent,
        VentasComponent,
        ClientesComponent,
        AdminComponent,
        EditarAdminComponent,
        EditarcategoriasComponent,
        EditarClientesComponent,
        EditarProveedoresComponent,
        EditarProductosComponent
  ]
})

export class AdminLayoutModule {}
