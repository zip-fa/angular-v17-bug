import { Component } from '@angular/core';

import { TestComponent } from './test.component';
import { Test2Component } from './test2.component';

@Component({
  selector: 'some-route',
  standalone: true,
  template: `Hi from route`
})
export class SomeRouteComponent { }
