import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() highlightKeyword: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  ngOnChanges() {
    // debugger
    // this.el.nativeElement.style.backgroundColor = 'yellow';

    const text = this.el.nativeElement.textContent;
    console.log(text);

    if (this.highlightKeyword && text.includes((this.highlightKeyword)?.trim())) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = 'white';
    }
  }
}
