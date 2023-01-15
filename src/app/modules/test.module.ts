import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryComponent } from '../components/grocery/grocery.component';
import { PantryComponent } from '../components/pantry/pantry.component';
import { PantryModule } from '../components/pantry/pantry.module';
import { ShoppingComponent } from '../components/shopping/shopping.component';

@NgModule({
  imports: [CommonModule, PantryModule],
  declarations: [GroceryComponent, PantryComponent, ShoppingComponent],
  exports: [GroceryComponent, PantryComponent, ShoppingComponent],
})
export class TestModule {}
