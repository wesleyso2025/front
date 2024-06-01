import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { EventPluginsModule } from '@tinkoff/ng-event-plugins';
import { routes } from './app.routes';
import { SupabaseService } from './core/services/supabase.service';
import { provideStore } from '@ngrx/store';


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),    
    importProvidersFrom(EventPluginsModule, TuiRootModule),
    provideStore(),
    SupabaseService,
  ],
};
