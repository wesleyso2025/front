import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TuiButtonModule, TuiNotificationModule } from '@taiga-ui/core';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [TuiButtonModule, TuiNotificationModule, NgIf],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.less',
})
export class ActionBarComponent {
  @Input() leftButtonLabel = 'Cancel';
  @Input() rightButtonLabel = 'Save';

  @Input() isNotificationShown = true;
  @Input() notificationLabel = 'Que desea hacer?';

  @Output() leftButtonClick = new EventEmitter();
  @Output() rightButtonClick = new EventEmitter();
}
