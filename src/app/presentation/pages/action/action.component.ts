import { Component, inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { TuiActionModule } from '@taiga-ui/kit';


@Component({
  selector: 'app-action',
  standalone: true,
  imports: [TuiActionModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.less',
})
export class ActionComponent {
  alerts = inject(TuiAlertService);

  onClick(text: string) {
    this.alerts.open(text).subscribe();
  }
}
