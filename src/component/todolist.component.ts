import {Component, ContentChild, TemplateRef, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from '../interface/todo.interface'

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <template *ngFor="let todo of todos; template: itemsTemplate">
      </template>
    </ul>
  `
})
export class TodoList {
  @Input() todos: Todo[];
  @Input() itemsTemplate: TemplateRef<any>;
  @Output() toggle = new EventEmitter<Todo>();
}