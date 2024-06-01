import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { Value } from '../../../core/models/value.model';

@Component({
  selector: 'app-value-card',
  standalone: true,
  imports: [TuiIslandModule, NgClass],
  templateUrl: './value-card.component.html',
  styleUrl: './value-card.component.less'
})
export class ValueCardComponent {
  @Input() value: Value = { label: '', value: '' };
  @Input() compact: boolean = false;
}
