// Para empezar a trabajar con TypeScript hat que importar la librería de Angular Core con import

import { Component } from '@angular/core';

@Component({ // Decorador
    selector: 'app-fecha', //Nombre donde quiero renderizar ese componente
    templateUrl: './fecha.component.html', //Enlazo archivo html con TypeScript
    styleUrls: ['./fecha.component.css'] //Metemos el archivo css
})

export class FechaComponent { // Exportarlo para que ese componente pueda ser utilizado
    hoy:object = new Date(); // Para que nos devuelva la fecha actual (No es necesario poner var)
}