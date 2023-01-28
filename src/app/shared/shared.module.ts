import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
@NgModule({
  // pipes, components, directives can be declared
  declarations: [CapitalizePipe],

  //
  exports: [CapitalizePipe],
})
export class SharedModule {}
