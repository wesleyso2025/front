import { Component, inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [],
  templateUrl: './action.component.html',
  styleUrl: './action.component.less',
})
export class ActionComponent {
  alerts = inject(TuiAlertService);

  onClick(text: string) {
    this.alerts.open(text).subscribe();
  }
}
