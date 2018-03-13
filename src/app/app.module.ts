import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// A continuación ponemos el nombre con el que exportamos en fecha.component.ts
import { FechaComponent } from './fecha/fecha.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MonoarchivoComponent } from './monoarchivo/monoarchivo.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FechaComponent,
    ImagenesComponent,
    MonoarchivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
