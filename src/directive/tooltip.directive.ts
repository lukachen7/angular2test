import {HostListener, Input, Injectable, ElementRef, Inject, Directive} from '@angular/core';

@Directive({
  selector: '[saTooltip]'
})
export class Tooltip {
	private _saTooltipText:string;
	
	@Input('saTooltip') tooltip: string;
	
	@Input() set saTooltipText(colorName: string){
    		this._saTooltipText = colorName;
    		
  	}

	constructor(private el: ElementRef) {
//		el.nativeElement.style.backgroundColor = 'yellow';   		
	}
  
  	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('yellow');
		console.log(this._saTooltipText);
		console.log(this.tooltip);
	}
	
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}
	
	private highlight(color: string) {
    		this.el.nativeElement.style.backgroundColor = color;
  	}
}
