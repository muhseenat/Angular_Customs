import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {




  constructor(private el:ElementRef) {
    // console.log(el.nativeElement);
    el.nativeElement.style.fontWeight="bold";
  
    
   }



}
