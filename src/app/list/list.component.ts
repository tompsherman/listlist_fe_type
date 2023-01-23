import { Component } from '@angular/core';
import { toggleSwitch } from '../shared/functions';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  // styleUrls:
})
export class ListComponent {

title: string = ""
people: any[] = []
isVisible: boolean = true;


changeVisibility(){
  this.isVisible = !this.isVisible
}
constructor() {}

ngOnInit(){
  

  this.title = "ListList (App in Development):"

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

  fortunes = [
    {
      id: 1,
      fortune: "They cannot take away our self-respect if we do not give it to them."
    },
    {
      id: 2,
      fortune: ""
    },
    {
      id: 3,
      fortune: ""
    },
    {
      id: 4,
      fortune: ""
    },
    {
      id: 5,
      fortune: ""
    },
    {
      id: 6,
      fortune: ""
    },
    {
      id: 7,
      fortune: ""
    },
    {
      id: 8,
      fortune: ""
    },
    {
      id: 9,
      fortune: ""
    },
    {
      id: 10,
      fortune: ""
    },
    {
      id: 11,
      fortune: ""
    },
    {
      id: 12,
      fortune: ""
    },
    {
      id: 13,
      fortune: ""
    },
    {
      id: 14,
      fortune: ""
    },
    {
      id: 15,
      fortune: ""
    },
    {
      id: 16,
      fortune: ""
    },
    {
      id: 17,
      fortune: ""
    },
    {
      id: 18,
      fortune: ""
    },
    {
      id: 19,
      fortune: ""
    },
    {
      id: 20,
      fortune: ""
    },
    {
      id: 21,
      fortune: ""
    },
    {
      id: 22,
      fortune: ""
    },
    {
      id: 23,
      fortune: ""
    },
    {
      id: 24,
      fortune: ""
    },
    {
      id: 25,
      fortune: ""
    },
    {
      id: 26,
      fortune: ""
    },
    {
      id: 27,
      fortune: ""
    },
    {
      id: 28,
      fortune: ""
    },
    {
      id: 29,
      fortune: ""
    },
    {
      id: 30,
      fortune: ""
    },
  ]
}
