import { Component, Input } from '@angular/core';
import { TuiIslandModule } from '@taiga-ui/kit';
import { TuiAxesModule, TuiBarChartModule } from '@taiga-ui/addon-charts';
import { tuiCeil } from '@taiga-ui/cdk';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [TuiIslandModule, TuiBarChartModule, TuiAxesModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.less'
})
export class BarChartComponent {

  @Input() header: string = '';
  @Input() value = [
    [
      3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637,
      8779,
    ],
    [
      3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195,
      3574,
    ],
  ];

  @Input() labelsX = ['Jan 2019', 'Feb', 'Mar'];
  @Input() labelsY = ['0', '10 000'];

  getHeight(max: number): number {
    return (max / tuiCeil(max, -3)) * 100;
  }

}
