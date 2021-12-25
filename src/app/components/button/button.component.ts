import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

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
  @Input() custom = ""; // custom styles
}
