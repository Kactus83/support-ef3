import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule }    from '@angular/common';
import { RouterModule }    from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-iot-domotique',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  templateUrl: './iot-domotique.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IotDomotiqueComponent {}
