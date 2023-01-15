import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { PantryModule } from './components/pantry/pantry.module';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { TestModule } from './modules/test.module';

@NgModule({
  declarations: [
    AppComponent,
    // GroceryComponent,
    // PantryComponent,
    // ShoppingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
