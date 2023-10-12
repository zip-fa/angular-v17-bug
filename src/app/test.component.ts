import { Component } from '@angular/core';

@Component({
  selector: 'test',
  standalone: true,
  styles: [
    `:host {
      display: flex;
      flex-direction: column;
      flex: 1;
    }`
  ],
  template: ``
})
export class TestComponent { }
