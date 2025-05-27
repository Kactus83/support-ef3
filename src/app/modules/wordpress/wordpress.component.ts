import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wordpress',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIf,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './wordpress.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordpressComponent {
  /**
   * Module WordPress basique :
   * - Formation initiale (2020) par Grégoire Noyelle
   * - Environ 10 sites réalisés pour clients & associations
   * - Formation récente aux thèmes blocs (JS/PHP)
   */
}
