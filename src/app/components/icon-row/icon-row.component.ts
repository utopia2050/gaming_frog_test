import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-row',
  templateUrl: './icon-row.component.html',
  styleUrls: ['./icon-row.component.scss']
})
export class IconRowComponent implements OnInit {

  @Input() index: number

  constructor() { }

  ngOnInit() {
  }
}
