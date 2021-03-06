import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ scope.name }}</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'expense-control';

  scope = environment.scope
}
