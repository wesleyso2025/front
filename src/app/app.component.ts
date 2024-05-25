import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppbarComponent } from './presentation/shared/components/appbar/appbar.component';
import { CarrouselComponent } from './presentation/pages/carrousel/carrousel.component';
import { CommonModule } from '@angular/common';
import { TUI_DIALOG_CLOSES_ON_BACK } from '@taiga-ui/cdk';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    AppbarComponent,
    CarrouselComponent,
    RouterLinkActive,
    RouterLink
  ],
  template: `<tui-root>
    <main class="main-wrapper">
      <app-appbar></app-appbar>
      <router-outlet></router-outlet>
    </main>
  </tui-root> `,
  styleUrl: './app.component.less',
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: TUI_DIALOG_CLOSES_ON_BACK, useValue: of(true) },
  ],
})
export class AppComponent {
  title = 'JobPortal';
}
