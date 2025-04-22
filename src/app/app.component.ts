import { Component } from '@angular/core';
import { IconTestComponent } from './components/icon-test.component';


@Component({
  selector: 'app-root',
  imports: [
    IconTestComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fontawesome-demo';
}
