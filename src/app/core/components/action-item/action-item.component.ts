import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiIslandModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-action-item',
  standalone: true,
  imports: [TuiIslandModule, TuiButtonModule, TuiSvgModule, NgIf],
  templateUrl: './action-item.component.html',
  styleUrl: './action-item.component.less',
})
export class ActionItemComponent {
  @Input() label: string = '';
  @Input() actionLabel: string = '';
  @Input() canDelete: boolean = true;
  @Output() action = new EventEmitter();
  @Output() delete = new EventEmitter();
}
