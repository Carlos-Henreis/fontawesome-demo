import { Component, inject, signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-icon-test',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './icon-test.component.html',
  styleUrl: './icon-test.component.css',
  standalone: true
})
export class IconTestComponent {
  hide = signal(true);

  constructor() {
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

}
