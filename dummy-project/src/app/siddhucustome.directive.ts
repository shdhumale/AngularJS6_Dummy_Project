import { AppComponent } from './app.component';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSiddhucustome]'
})
export class SiddhucustomeDirective {

  constructor(eL: ElementRef) {
  eL.nativeElement.style.color = 'green';
  eL.nativeElement.style.background = 'black';

  }

}
