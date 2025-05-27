import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-qualite-architecture',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './qualite-architecture.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualiteArchitectureComponent { }
