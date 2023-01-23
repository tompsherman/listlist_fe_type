import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListModule } from './list/list.module';
import { NavComponent } from './navigation/nav.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, ListModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
