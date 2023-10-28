import { Component } from "@angular/core";

@Component({

    selector: 'nav-component',
    templateUrl: './app.nav.html', 
    styleUrls: ['./app.nav.scss']
})

export class NavComponent{

    menuOptions = [
        { id: 'opcion1', label: 'Inicio' },
        {
          id: 'opcion2',
          label: 'Mecenazgo/Patrocinio',
          subOptions: [
            { label: 'Sociedades y empresas', link: '' },
            { label: 'Personas y particulares', link: '' }
          ]
        },
        { id: 'opcion3', label: 'Conciertos' },
        {
          id: 'opcion4',
          label: 'Pruebas de acceso',
          subOptions: [
            { label: 'Pruebas de acceso 2023', link: '' },
            { label: 'Formulario de acceso 2024', link: '' }
          ]
        },
        {
          id: 'opcion5',
          label: 'La orquesta',
          subOptions: [
            { label: 'Calendario', link: '' },
            { label: 'Funcionamiento', link: '' },
            { label: 'JOsM desde dentro', link: '' },
            { label: 'Musicos', link: '' },
            { label: 'Directiva JOsM', link: '' },
            { label: 'Temporada', link: '' },
            { label: 'Prensa', link: '' }
          ]
        },
        {
          id: 'opcion6',
          label: 'Pruebas de acceso',
          subOptions: [
            { label: 'Pruebas de acceso 2023', link: '' },
            { label: 'Formulario de acceso 2024', link: '' }
          ]
        },
        { id: 'opcion7', label: 'Miembros' }
      ];
    constructor(){
        console.log("ta cargando");
        
    }

}