import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'apl-home',
    template: `<router-outlet></router-outlet>`,
})

export class HomeComponent implements OnInit {
    
    constructor() { }

    ngOnInit(): void {

    }
}