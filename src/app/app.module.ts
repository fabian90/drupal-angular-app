import { ContainerListComponent } from './features/container-list/container-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Agregar esta línea
import { DataTableComponent } from './features/data-table/data-table.component';
import { AppComponent } from '../app/app.component';
import { FilterPipe } from './shared/pipes/filter.pipe'; // Importar el Pipe
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ContainerListComponent,
    FilterPipe // Añadir aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Asegúrate de que FormsModule esté aquí
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
