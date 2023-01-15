import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = '';
  bool: boolean = false;
  rando: number = Math.floor(Math.random() * 100 + 1) % 2;
  constructor() {}

  ngOnInit() {
    this.title = 'listlist';
    console.log(this.rando);
    if (this.rando > 0) {
      this.bool = true;
    } else {
      this.bool = false;
    }
  }
}
