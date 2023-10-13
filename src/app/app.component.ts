import { Component, inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { test } from './core/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = $localize`sdf`;

  public readonly test = test;
  public readonly localeId = inject(LOCALE_ID);
}
