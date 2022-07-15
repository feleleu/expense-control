import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-root',
    template: `
      <app-tool-bar></app-tool-bar>
      <router-outlet></router-outlet>
      `,
})

export class PagesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {

    }
}
