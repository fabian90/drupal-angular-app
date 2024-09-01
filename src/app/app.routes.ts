import { ContainerListComponent } from './features/container-list/container-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './features/data-table/data-table.component'; // Asegúrate de que la ruta sea correcta


export const routes: Routes = [
  { path: 'data-table', component: DataTableComponent }, // Ruta para el componente de tabla de datos
  { path: 'containers', component: ContainerListComponent }, // Ruta para el componente de lista de contenedores
  { path: '', redirectTo: '/data-table', pathMatch: 'full' }, // Redirige a la tabla de datos por defecto
  { path: '**', redirectTo: '/data-table' } // Redirige a la tabla de datos para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
