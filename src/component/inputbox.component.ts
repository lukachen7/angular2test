import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'input-box',
  template: `
  	<ng-content select="panel-title"></ng-content>
    <input #todoInput [placeholder]="inputPlaceholder">
    <button (click)="emitText(todoInput.value); todoInput.value = '';">
      {{buttonLabel}}
    </button>
  `
})
export class InputBox {
  @Input() inputPlaceholder: string;
  @Input() buttonLabel: string;
  @Output() inputText = new EventEmitter<string>();
  emitText(text: string) {
    this.inputText.emit(text);
  }
}