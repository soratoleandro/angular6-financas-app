import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><ngx-spinner bdColor = "rgba(51, 51, 51, 0.8)" size = "default" color = "#fff" type = "ball-spin-clockwise"></ngx-spinner>',
  styles: []
})

export class AppComponent {
  title = 'financeiro';
}
