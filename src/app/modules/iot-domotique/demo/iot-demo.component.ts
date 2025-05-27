import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { MatButtonModule }   from '@angular/material/button';
import { MatIconModule }     from '@angular/material/icon';

@Component({
  selector: 'app-iot-demo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './iot-demo.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IotDemoComponent {
  selectedDemo: { id: string; title: string } | null = null;

  demos = [
    { id: 'led-sync',   title: 'Ambilight LED Sync' },
    { id: 'weather',    title: 'Station Météo Connectée' },
    { id: 'diffuser',   title: 'Diffuseur d’Huiles Essentielles' }
  ];

  open(d: { id: string; title: string }) { this.selectedDemo = d; }
  close()                               { this.selectedDemo = null; }
}
