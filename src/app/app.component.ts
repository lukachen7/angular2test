import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface/todo.interface'
import { InputBox } from '../component/inputbox.component'

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
  	label:'todo1',
  	completed:false
  },{
  	label:'todo2',
  	completed:true
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
}
