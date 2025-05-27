import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgClass
} from '@angular/common';
import {
  RouterModule,
  RouterLink
} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Slide {
  icon: string;
  title: string;
  description: string;
  dateRange: string;
  link?: string;
  linkText?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    NgForOf,
    NgIf,
    NgClass,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  /** Index du slide actuellement affiché */
  currentSlide = 0;

  /** Définition des étapes du parcours */
  readonly slides: Slide[] = [
    {
      icon: 'school',
      title: 'Collège & Lycée',
      dateRange: '2007 – 2010',
      description: `C’est au collège que j’ai découvert Dreamweaver. HTML, CSS, PHP puis
JavaScript : j’ai monté mes premiers sites personnels, fasciné par la magie
de transformer du code en pages interactives dans un navigateur.`
    },
    {
      icon: 'bolt',
      title: 'Entreprise d’électricité',
      dateRange: '2012 – 2015',
      description: `À la tête d’une PME d’électricité sur la Côte d’Azur, j’ai implémenté
des solutions domotiques (THEBIS, LEGRAND). Face à leurs protocoles
propriétaires, j’ai compris l’enjeu de l’interopérabilité logicielle.`,
      link: '/iot-domotique',
      linkText: 'Explorer l’IoT'
    },
    {
      icon: 'desktop_windows',
      title: 'Services numériques',
      dateRange: '2018 – 2020',
      description: `En accompagnant des sites WordPress, j’ai appris la structure de thèmes
et de plugins, la maintenance SEO et les bonnes pratiques de performance.
Puis j’ai migré vers TypeScript, Angular et React pour plus de robustesse.`,
      link: '/wordpress',
      linkText: 'Voir WordPress'
    },
    {
      icon: 'sports_esports',
      title: 'Projets Gaming',
      dateRange: '2019 – Présent',
      description: `Mes prototypes sont passés à Docker et aux micro-services. Confronté
à la dette technique, j’ai adopté SOLID et les design patterns, structurant
mes applications pour qu’elles restent maintenables à grande échelle.`,
      link: '/qualite-architecture',
      linkText: 'SOLID & Patterns'
    },
    {
      icon: 'wifi',
      title: 'Objets Connectés',
      dateRange: '2019 – Présent',
      description: `DIY IoT : capteurs MQTT, passerelles LoRa, flash de firmwares,
intégration Home Assistant… Chaque projet m’a appris à concilier contraintes
hardware et exigences software.`,
      link: '/iot-domotique',
      linkText: 'Découvrir IoT'
    },
    {
      icon: 'cloud_queue',
      title: 'Entrée en BTS',
      dateRange: '2023 – Présent',
      description: `Passage en production avec Terraform et CI/CD : j’ai automatisé
le provisioning multi-cloud (AWS & GCP), garantissant rapidité,
traçabilité et résilience de l’infrastructure.`,
      link: '/cloud-iac',
      linkText: 'Infrastructure as Code'
    }
  ];

  /** Affiche le slide précédent (cyclique) */
  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  /** Affiche le slide suivant (cyclique) */
  nextSlide(): void {
    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;
  }
}
