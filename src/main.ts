import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';
// import { environment } from './environments/environment'; // Asegúrate de que esta ruta sea correcta

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic()
  .bootstrapModule(AppModule) // Usa appConfig aquí
  .catch(err => console.error(err));
