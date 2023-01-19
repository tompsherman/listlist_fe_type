import { Component } from '@angular/core';
import { ITodo } from '../../shared/interfaces';
import { FilterTextbocComponent } from 'src/app/shared/components/filtered-textbox.component';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  // styleUrls:
})
export class ToDoListComponent {
  
    filteredTodos: ITodo[] = []
    todosTotal: number = 0

    constructor() {

    }

    ngOnInit() {

    }
}
