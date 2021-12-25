import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() type = "text";
  @Input() value!: string;
  //@Input() disabled!: boolean;
  //@Output() onClick = new EventEmitter();
}
