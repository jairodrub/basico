import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monoarchivo',
  template: `<div class="contenedor"> 
                <h1>&copy; 2.018 {{empresa}}</h1> 
             </div>` // empresa es una variable que tenemos dentro de la clase.
})
export class MonoarchivoComponent implements OnInit {
  empresa:string = "ACME, S.A.";
  constructor() { }

  ngOnInit() {
  }

}
