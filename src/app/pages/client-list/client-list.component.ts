import { Component, Inject, NgZone } from '@angular/core';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiDialogService,
  TuiRootModule,
} from '@taiga-ui/core';
import { ActionItemComponent } from '../../core/components/action-item/action-item.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HorizontalDividerComponent } from '../..//core/components/horizontal-divider/horizontal-divider.component';
import { TUI_PROMPT } from '@taiga-ui/kit';
import { Router, RouterLink } from '@angular/router';
import { ClientListStore } from './client-list.store';
import { ClientListItem } from '../../states/client-list.state';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [ TuiButtonModule,
    TuiDialogModule,
    TuiRootModule,
    ActionItemComponent,
    HorizontalDividerComponent,
    NgFor,
    NgIf,
    AsyncPipe,
    RouterLink],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.less',
  providers: [ClientListStore],
})
export class ClientListComponent {

  newClientName = '';
  vm$ = this.clientListStore.vm$;

  constructor(
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
    private readonly clientListStore: ClientListStore,
    private readonly zone: NgZone,
    private readonly router: Router
  ) {
    this.clientListStore.getClients();
  }

  createClient() {
    this.clientListStore.createClient();
  }

  loadClient(clientId: number) {
    this.zone.run(() => {
      this.router.navigate([`/client/${clientId}`]);
    });
  }

  deleteClient(clientId: number) {
    this.clientListStore.deleteClient(clientId);
  }

  openDeleteDialog(clientItem: ClientListItem) {
    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        data: {
          content: `Do you want to delete ${clientItem.client.name}? This action cannot be undone.`,
          yes: 'Delete',
          no: 'Cancel',
        },
      })
      .subscribe(result => {
        if (result) {
          this.deleteClient(clientItem.id);
        }
      });
  }

}
