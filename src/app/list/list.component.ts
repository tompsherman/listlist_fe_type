import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  // styleUrls:
})
export class ListComponent {
  // groceryItems:[] = []
  constructor() {}
  
ngOnInit(){

}
  groceryItems = [
    { amount: 5, item: 'apples', completed: false },
    { amount: 1, item: 'lb. fish', completed: false },
    { amount: 3, item: 'golden marmosets', completed: false },
  ];

  todoItems = [
    {
      task: 'create list component',
      description: 'displays list ',
      completed: true,
    },
    {
      task: 'add items to list',
      description: 'add new items',
      completed: false,
    },
    {
      task: 'update items on list',
      description: 'edit items',
      completed: false,
    },
    { task: 'delete items', description: 'delete items', completed: false },
    {
      task: 'filter/sort items',
      description: 'sort list by category',
      completed: false,
    },
    { task: 'search items', description: 'filter by input', completed: false },
    {
      task: 'set up routing',
      description: 'dynamic routing',
      completed: false,
    },
    {
      task: 'CRUD operations',
      description: 'GET / POST / PUT / DEL',
      completed: false,
    },
  ];
}
