import { Directive, HostListener, HostBinding, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
      this.backgroundColor = this.highlightBgColor;
      this.color = this.highlighColor;
      this.fontWeight = this.highlighFWeight;
      this.fontSize = this.highlighSize;
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.backgroundColor = this.defaultBgColor;
      this.color = this.defaultColor;
      this.fontWeight = this.defaultFWeight;
      this.fontSize = this.defaultSize;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.fontWeight') fontWeight: string;
  @HostBinding('style.fontSize') fontSize: string;

  @Input() defaultBgColor: string = 'white';
  @Input() defaultColor: string = 'black';
  @Input() defaultFWeight: string = 'normal';
  @Input() defaultSize: string = '16px';

  @Input('highlight') highlightBgColor: string = 'blue';
  @Input() highlighColor: string = 'yellow';
  @Input() highlighFWeight: string = 'bold';
  @Input() highlighSize: string = '25px';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultBgColor;
  }

}
