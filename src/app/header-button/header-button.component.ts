import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  constructor() {
    this.className = this.toggled ? "btnActive" : "btn";
  }

  ngOnInit(): void {
  }

  @Input() id!: string;
  @Input() text!: string;
  @Input() toggled!: boolean;
  className: string;
  @Input() image!: string;
}
