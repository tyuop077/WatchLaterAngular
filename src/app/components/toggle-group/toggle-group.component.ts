import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle-group',
  templateUrl: './toggle-group.component.html',
  styleUrls: ['./toggle-group.component.scss']
})
export class ToggleGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() buttons!: string[];
  @Input() selected!: number;
  @Output() onChanged = new EventEmitter<number>();

  handleChange(n: number) {
    this.selected = n;
    this.onChanged.emit(n);
  }
}
