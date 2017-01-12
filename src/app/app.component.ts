import { Component, ContentChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface/todo.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  items = ['im one','im two'];
  isShow = true;
  todos: Todo[] = [{
    label: 'Buy milk',
    completed: false
  }, {
    label: "Save the world",
    completed: true
  }];
  printValue(value){
  	console.log(value);
  }
  addTodo(label: string) {
    this.todos.push({
      label:label,
      completed: false
    });
  }
  tabChanged(tab) {
    console.log(tab);
  }
  toggleCompletion(param){
  	console.log(param);
  }
  @ContentChild(TemplateRef)
  itemsTemplate: TemplateRef<any>;
}
