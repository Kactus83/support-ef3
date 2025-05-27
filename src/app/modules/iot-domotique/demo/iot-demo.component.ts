import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { MatButtonModule }   from '@angular/material/button';
import { MatIconModule }     from '@angular/material/icon';

interface Demo {
  id: string;
  title: string;
  videoSrc: string;
}

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
  demos: Demo[] = [
    {
      id: 'ha-ui',
      title: 'UI Custom Home Assistant',
      videoSrc: '/videos/ui-ha-laptop.mp4'
    },
    {
      id: 'mobile-ui',
      title: 'UI Mobile',
      videoSrc: '/videos/demo-mobile-ui.mp4'
    },
    {
      id: 'led-demo-1',
      title: 'Démo LEDs',
      videoSrc: '/videos/demo-led.mp4'
    },
    {
      id: 'led-demo-2',
      title: 'Démo LEDs (Effets dynamiques)',
      videoSrc: '/videos/demo-leds-2.mp4'
    }
  ];

  selectedDemo: Demo | null = null;

  open(demo: Demo) {
    this.selectedDemo = demo;
  }

  close() {
    this.selectedDemo = null;
  }
}
