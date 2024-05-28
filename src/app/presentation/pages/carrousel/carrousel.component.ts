import { Component, signal } from '@angular/core';
import { TuiCarouselModule, TuiPaginationModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [TuiCarouselModule,TuiPaginationModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.less',
})
export class CarrouselComponent {
  index = signal(2);

  images = signal([
    'http://unsplash.com/es/fotos/una-vista-de-una-cadena-montanosa-desde-un-avion-CurCSZ4AWDI',
    'http://unsplash.com/es/fotos/una-persona-sosteniendo-una-bebida-en-una-copa-de-vino-diQkCJwnOtQ',
    'http://unsplash.com/es/fotos/un-cuerpo-de-agua-con-una-ciudad-al-fondo-oseHG-yt-3Y',
  ]);
}
