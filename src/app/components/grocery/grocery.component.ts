import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss'],
})
export class GroceryComponent {
  booly: boolean = false;
  public toggle() {
    this.booly = !this.booly;
  }
}
