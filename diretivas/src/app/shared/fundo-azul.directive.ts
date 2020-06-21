import { Directive, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: 'button[fundoAzul]'
})
export class FundoAzulDirective {

  constructor( 
    private _elementRef : ElementRef,
    private _renderer : Renderer2
    ) { 
    console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    // this._elementRef.nativeElement.style.borderColor = 'blue';
    // this._elementRef.nativeElement.style.borderStyle = 'solid';
    // this._elementRef.nativeElement.style.borderWidth = '1px';
    // this._elementRef.nativeElement.style.fontWeight = 'bold';
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'blue');
    this._renderer.setStyle(this._elementRef.nativeElement, 'border-color', 'red');
    this._renderer.setStyle(this._elementRef.nativeElement, 'border-style', 'solid');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'white');    
    this._renderer.setStyle(this._elementRef.nativeElement, 'border-width', '2px');
  }

}
