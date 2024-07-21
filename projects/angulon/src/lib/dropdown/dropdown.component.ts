import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { OutsideClickDirective } from '../directives/outside-click.directive';

type Option = {
  label: string;
  value: string | number;
};

@Component({
  selector: 'ang-dropdown',
  standalone: true,
  imports: [NgClass, OutsideClickDirective],
  templateUrl: './dropdown.component.html',
  styleUrl: '../../styles.css',
})
export class DropdownComponent {
  @Input() options: Option[] = [];
  @Input() placeholder = 'Select...';
  @Input() isOpen = false;
  @Output() onSelect = new EventEmitter<Option>();
  selected!: Option;

  handleSelect(option: Option) {
    this.onSelect.emit(option);
    this.selected = option;
  }
}
