import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../../shared/interfaces';
import { FilterTextbocComponent } from 'src/app/shared/components/filtered-textbox.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  // styleUrls:
})
export class ToDoListComponent implements OnInit{
  private _todos: ITodo[] = []  
  @Input() get todos():ITodo[] {
    return this._todos
  }

  set todos(value: ITodo[]){
    if (value){
      this.filteredTodos = this._todos = value;
      this.calculateTodos()
    }
  }
    
    filteredTodos: ITodo[] = []
    todosTotal: number = 0

    constructor() {

    }

    ngOnInit() {
      
    }

   

    calculateTodos(){
      this.filteredTodos.forEach((todo: ITodo) => {

        this.todosTotal += todo.points
      })
    }

    sort(prop: string){
      // sorter service will handle the sorting
    }
}
