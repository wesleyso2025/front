import { Component, Input } from '@angular/core';
import { TuiAppBarModule } from '@taiga-ui/experimental';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { HorizontalDividerComponent } from '../horizontal-divider/horizontal-divider.component';

@Component({
  selector: 'app-app-bar',
  standalone: true,
  imports: [ TuiAppBarModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiLinkModule,
    RouterModule,
    HorizontalDividerComponent,
    TuiSvgModule],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.less'
})
export class AppBarComponent {
  @Input() pageName = '';

  open = false;

  toggle(open: boolean) {
    this.open = open;
  }

}
