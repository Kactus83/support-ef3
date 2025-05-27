import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Pattern {
  id: string;
  name: string;
  detail: string;
  color: string;
}

@Component({
  selector: 'app-design-patterns',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './design-patterns.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignPatternsComponent {
  selected: string | null = null;

  patterns: Pattern[] = [
    {
      id: 'singleton',
      name: 'Singleton',
      color: 'bg-red-500',
      detail: `
        <h4>Singleton Pattern</h4>
        <p>Garantit qu’une classe n’a qu’une unique instance globale, accessible partout.  
        Utile pour les gestionnaires de config ou pools de connexions.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Réduit la consommation de ressources et simplifie l’accès aux services partagés.</p>
        <p>⚙️ <strong>Implémentation</strong> : cacher le constructeur et exposer une méthode <code>getInstance()</code>.</p>`
    },
    {
      id: 'observer',
      name: 'Observer',
      color: 'bg-green-500',
      detail: `
        <h4>Observer Pattern</h4>
        <p>Définit une relation un-à-plusieurs pour notifier automatiquement les abonnés lors d’un changement d’état.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Découple l’émetteur d’événements de ses récepteurs, facilitant l’extensibilité.</p>
        <p>⚙️ <strong>Implémentation</strong> : un sujet qui gère une liste d’observateurs et appelle leur méthode <code>update()</code>.</p>`
    },
    {
      id: 'adapter',
      name: 'Adapter',
      color: 'bg-blue-500',
      detail: `
        <h4>Adapter Pattern</h4>
        <p>Convertit l’interface d’une classe existante en une interface attendue par le client.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Permet d’intégrer des API tierces ou legacy sans modifier leur code.</p>
        <p>⚙️ <strong>Implémentation</strong> : créer une classe adaptatrice qui implémente l’interface cible et délègue aux méthodes de l’adapté.</p>`
    },
    {
      id: 'strategy',
      name: 'Strategy',
      color: 'bg-yellow-500',
      detail: `
        <h4>Strategy Pattern</h4>
        <p>Encapsule une famille d’algorithmes derrière une interface commune, permettant de les substituer dynamiquement.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Évite les instructions conditionnelles dispersées et favorise l’extensibilité.</p>
        <p>⚙️ <strong>Implémentation</strong> : définir une interface <code>Strategy</code> et plusieurs implémentations concrètes.</p>`
    },
    {
      id: 'decorator',
      name: 'Decorator',
      color: 'bg-purple-500',
      detail: `
        <h4>Decorator Pattern</h4>
        <p>Ajoute dynamiquement des responsabilités à un objet sans modifier sa classe de base.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Offre plus de flexibilité que l’héritage statique pour combiner des fonctionnalités.</p>
        <p>⚙️ <strong>Implémentation</strong> : wrapper l’objet original dans des objets décorateurs successifs.</p>`
    }
  ];

  select(id: string) {
    this.selected = id;
  }

  next() {
    const ids = this.patterns.map(p => p.id);
    if (!this.selected) {
      this.selected = ids[0];
    } else {
      const i = ids.indexOf(this.selected);
      this.selected = ids[(i + 1) % ids.length];
    }
  }

  getColor(id: string): string {
    const p = this.patterns.find(x => x.id === id);
    return p ? `${p.color} bg-opacity-75` : '';
  }
}
