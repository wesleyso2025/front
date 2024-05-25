import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import {
  TuiButtonModule,
  TuiLabelModule,
  TuiLinkModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiAppBarModule } from '@taiga-ui/experimental';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { CarrouselComponent } from '../../../pages/carrousel/carrousel.component';
import { CommonModule } from '@angular/common';
import { ActionComponent } from '../../../pages/action/action.component';
import { Subject, Subscription, distinctUntilChanged, mapTo, merge, startWith } from 'rxjs';

@Component({
  selector: 'app-appbar',
  standalone: true,
  imports: [
    TuiAppBarModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiLinkModule,
    RouterModule,
    TuiSvgModule,
  ],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.less',
})
export class AppbarComponent {
  
  open = false;

  toggle(open: boolean) {
    this.open = open;
  }

}
