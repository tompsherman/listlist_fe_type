import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { ListComponent } from './list.component';
import { ToDoListComponent } from './todo-list/todo-list.component';
import { FilterTextbocComponent } from '../shared/components/filtered-textbox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, ToDoListComponent, FilterTextbocComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule, FormsModule],
  exports: [ListComponent],
  providers: [],
})
export class ListModule {}
