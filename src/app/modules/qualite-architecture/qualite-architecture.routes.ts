import { Routes } from '@angular/router';
import { QualiteArchitectureComponent } from './qualite-architecture.component';
import { SolidPrinciplesComponent } from './solid-principles/solid-principles.component';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';

export default [
  { path: '', component: QualiteArchitectureComponent },
  { path: 'solid', component: SolidPrinciplesComponent },
  { path: 'design-patterns', component: DesignPatternsComponent },
  { path: '**', redirectTo: '' }
] as Routes;
