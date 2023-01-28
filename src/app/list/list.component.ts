import { Component } from '@angular/core';
import { toggleSwitch } from '../shared/functions';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  // styleUrls:
})
export class ListComponent {
  title: string = '';
  people: any[] = [];
  isVisible: boolean = true;

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }
  constructor() {}

  ngOnInit() {
    this.title = 'ListList (App in Development):';
  }
  groceryItems = [
    { amount: 5, item: 'apples', completed: false },
    { amount: 1, item: 'lb. fish', completed: false },
    { amount: 3, item: 'golden marmosets', completed: false },
  ];

  todoItems = [
    {
      id: 1,
      task: 'create list component',
      description: 'displays list ',
      completed: true,
      points: 1,
    },
    {
      id: 1,
      task: 'add items to list',
      description: 'add new items',
      completed: false,
      points: 1,
    },
    {
      id: 1,
      task: 'update items on list',
      description: 'edit items',
      completed: false,
      points: 1,
    },
    {
      id: 1,
      task: 'delete items',
      description: 'delete items',
      completed: false,
      points: 1,
    },
    {
      id: 1,
      task: 'filter/sort items',
      description: 'sort list by category',
      completed: false,
      points: 1,
    },
    {
      id: 1,
      task: 'search items',
      description: 'filter by input',
      completed: false,
      points: 1,
    },
    {
      id: 1,
      task: 'set up routing',
      description: 'dynamic routing',
      completed: false,
      points: 1,
    },
    {
      id: 1,
      task: 'CRUD operations',
      description: 'GET / POST / PUT / DEL',
      completed: false,
      points: 1,
    },
  ];
}
