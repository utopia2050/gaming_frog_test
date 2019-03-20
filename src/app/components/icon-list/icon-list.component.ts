import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {

  numbers: number[]
  @Input() count: number

  constructor() { }

  ngOnInit() {
    this.numbers = Array.from(new Array(this.count), (_, index) => index + 1)
  }
}
