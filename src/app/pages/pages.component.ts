import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-root',
  template: `
  <mat-drawer-container class="example-container" autosize>
    <mat-drawer #drawer class="example-sidenav" mode="side">
      <button (click)="showFiller = !showFiller" mat-raised-button>
        Toggle extra text
      </button>
    </mat-drawer>
    <div class="d-flex flex-column">
      <!-- <div style="background-color: red;" class="col-12 position-absolute top-0 left-0">
        <button type="button" mat-button (click)="drawer.toggle()">
          <mat-icon aria-hidden="false" aria-label="Example home icon">menu</mat-icon>
        </button>
      </div> -->
      <div class="col-12">
        <app-tool-bar></app-tool-bar>
        <router-outlet></router-outlet>
      </div>
    </div>
  </mat-drawer-container>
      `,
})

export class PagesComponent implements OnInit {
  showFiller = false;

  constructor() { }

  ngOnInit(): void {

  }
}
