import { Component } from '@angular/core';
import { TuiAccordionModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [TuiAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.less'
})
export class AccordionComponent {

}
