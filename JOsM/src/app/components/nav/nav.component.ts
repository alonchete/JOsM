import { Component } from "@angular/core";

@Component({

    selector: 'nav-component',
    templateUrl: './app.nav.html', 
    styleUrls: ['./app.nav.scss']
})

export class NavComponent{

    
    constructor(){
        console.log("ta cargando");
    }

}