import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../../shared/interfaces';
import { FilterTextbocComponent } from 'src/app/shared/components/filtered-textbox.component';
import { toggleSwitch } from 'src/app/shared/functions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  // input decorator retrieves and sets data from parent component
  private _todos: ITodo[] = [];

  @Input() get todos(): ITodo[] {
    return this._todos;
  }
  set todos(value: ITodo[]) {
    if (value) {
      this.filteredTodos = this._todos = value;
      this.calculateTodos();
    }
  }

  // component variables
  filteredTodos: ITodo[] = [];
  todosTotal: number = 0;
  isComplete: boolean = false;

  constructor() {}

  //when component initializes
  ngOnInit() {}

  calculateTodos() {
    this.filteredTodos.forEach((todo: ITodo) => {
      this.todosTotal += todo.points;
    });
  }

  filter(data: string) {
    this.todosTotal = 0;
    if (data) {
      this.filteredTodos = this.todos.filter((todo: ITodo) => {
        return (
          todo.task.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          todo.description.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          todo.completed.toString().indexOf(data.toLowerCase()) > -1 ||
          todo.points.toString().indexOf(data.toString()) > -1
        );
      });
    } else {
      this.filteredTodos = this.todos;
    }
    this.calculateTodos();
  }
  sort(prop: string) {
    // sorter service will handle the sorting
  }
}
