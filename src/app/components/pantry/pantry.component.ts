import { Component } from '@angular/core';

@Component({
  selector: 'app-pantry',
  templateUrl: './pantry.component.html',
  styleUrls: ['./pantry.component.scss'],
})
export class PantryComponent {
  booly: boolean = false;
  public toggle() {
    this.booly = !this.booly;
  }
}
