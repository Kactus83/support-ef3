import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { MatButtonModule }   from '@angular/material/button';
import { MatIconModule }     from '@angular/material/icon';

type BoardId = 'arduino' | 'particle' | 'd1mini';
type LedId   = 'wsrgb' | 'rgbw' | 'cob' | 'clocked';

@Component({
  selector: 'app-iot-hardware',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './iot-hardware.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IotHardwareComponent {
  boardOverlay: BoardId | null = null;
  ledOverlay:   LedId   | null = null;

  /** Ouvre le modal de détail carte */
  openBoard(id: BoardId) {
    this.boardOverlay = id;
  }

  /** Ouvre le modal de détail ruban LED */
  openLed(id: LedId) {
    this.ledOverlay = id;
  }

  /** Ferme tous les modals */
  close() {
    this.boardOverlay = null;
    this.ledOverlay   = null;
  }
}
