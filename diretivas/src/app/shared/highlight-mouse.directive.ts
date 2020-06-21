import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    console.log(this._elementRef);
    /*
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'blue');
    this._renderer.setStyle(this._elementRef.nativeElement, 'fontWeight', 'bold');
    this._renderer.setStyle(this._elementRef.nativeElement, 'fontSize', '25px');
    */
      this.backgroundColor = 'yellow';
      this.color = 'blue';
      this.fontWeight = 'bold';
      this.fontSize = '25px';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*
    this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'White');
    this._renderer.setStyle(this._elementRef.nativeElement, 'color', 'black');
    this._renderer.setStyle(this._elementRef.nativeElement, 'fontWeight', 'normal');
    this._renderer.setStyle(this._elementRef.nativeElement, 'fontSize', '18px');
    */
      this.backgroundColor = 'White';
      this.color = 'black';
      this.fontWeight = 'normal';
      this.fontSize = '18px';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.fontWeight') fontWeight: string;
  @HostBinding('style.fontSize') fontSize: string;

  // @HostBinding('style.backgroundColor') get setColor(){
  //   return this.backgroundColor;
  // }
  // private backgroundColor: string;
  
  constructor( 
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) { }
}
