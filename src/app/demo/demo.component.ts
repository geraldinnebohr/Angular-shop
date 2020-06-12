import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'my-app';

  names = ['nico', 'dave', 'laura'];

  power = 10;

  ngOnInit() {
    // code
  }

  addName() {
    this.names.push('nuevo nombre');
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
