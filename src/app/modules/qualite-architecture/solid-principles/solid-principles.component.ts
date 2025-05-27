import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Principle {
  id: string;
  name: string;
  detail: string;  // HTML content
  color: string;   // Tailwind bg color class
}

@Component({
  selector: 'app-solid-principles',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './solid-principles.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolidPrinciplesComponent {
  selected: string | null = null;

  principles: Principle[] = [
    {
      id: 's',
      name: 'Single Responsibility',
      color: 'bg-red-500',
      detail: `
        <h4>Single Responsibility Principle</h4>
        <p>Chaque classe ne doit avoir qu’une seule raison de changer. En isolant une responsabilité, on minimise les dépendances et on allège la maintenance.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Une classe multi-tâches devient rapidement difficile à tester et à maintenir : chaque changement peut impacter plusieurs fonctionnalités.</p>
        <p>🚀 <strong>Exemple pratique</strong> : Séparer la logique d’envoi d’email (EmailSender) de la logique de génération de contenu (ReportGenerator).</p>
        <p>👉 <strong>Impact</strong> : Réduction de la dette technique et cycles de livraison plus rapides.</p>`
    },
    {
      id: 'o',
      name: 'Open/Closed',
      color: 'bg-green-500',
      detail: `
        <h4>Open/Closed Principle</h4>
        <p>Les entités logicielles (classes, modules, fonctions) doivent être ouvertes à l’extension mais fermées à la modification.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Modifier du code existant introduit des risques de régression sur les fonctionnalités déjà testées.</p>
        <p>🛠️ <strong>Technique</strong> : Utiliser des interfaces et l’injection de dépendances pour ajouter de nouveaux comportements.</p>
        <p>🚀 <strong>Exemple pratique</strong> : Ajouter un nouveau mode de paiement (PayPalStrategy) sans toucher au paiement de base.</p>
        <p>👉 <strong>Impact</strong> : Meilleure évolutivité et stabilité accrue.</p>`
    },
    {
      id: 'l',
      name: 'Liskov Substitution',
      color: 'bg-blue-500',
      detail: `
        <h4>Liskov Substitution Principle</h4>
        <p>Une sous-classe doit pouvoir remplacer sa super-classe sans altérer le comportement attendu par le client.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Si un objet dérivé ne respecte pas le contrat, les utilisateurs s’en méfient et le code devient fragile.</p>
        <p>📈 <strong>Critère</strong> : Préconditions non renforcées, postconditions non affaiblies, invariants préservés.</p>
        <p>🚀 <strong>Exemple pratique</strong> : Un <code>Rectangle</code> et un <code>Square</code> : le carré ne doit pas modifier la logique de calcul de zone.</p>
        <p>👉 <strong>Impact</strong> : Fiabilité des hiérarchies de classes et réutilisation sans surprise.</p>`
    },
    {
      id: 'i',
      name: 'Interface Segregation',
      color: 'bg-yellow-500',
      detail: `
        <h4>Interface Segregation Principle</h4>
        <p>Préférer plusieurs interfaces spécifiques plutôt qu’une interface générale surchargée.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Un client forcé d’implémenter des méthodes inutiles perd en clarté et flexibilité.</p>
        <p>🧩 <strong>Technique</strong> : Créer des interfaces dédiées à chaque rôle.</p>
        <p>🚀 <strong>Exemple pratique</strong> : Séparer <code>IPrinter</code> en <code>IPrintText</code> et <code>IPrintGraphics</code>.</p>
        <p>👉 <strong>Impact</strong> : Couplage réduit et code plus lisible.</p>`
    },
    {
      id: 'd',
      name: 'Dependency Inversion',
      color: 'bg-purple-500',
      detail: `
        <h4>Dependency Inversion Principle</h4>
        <p>Les modules de haut niveau ne dépendent pas de modules de bas niveau : tous deux dépendent d’abstractions.</p>
        <p>🔍 <strong>Pourquoi ?</strong> Dépendre de classes concrètes rend le code rigide et difficile à tester.</p>
        <p>🛠️ <strong>Technique</strong> : Injection de dépendances via interfaces ou services injectables.</p>
        <p>🚀 <strong>Exemple pratique</strong> : Passer un <code>IRepository</code> à la couche métier au lieu d’un <code>SqlRepository</code> concret.</p>
        <p>👉 <strong>Impact</strong> : Facilite le mock, les tests unitaires, et le remplacement de modules.</p>`
    }
  ];

  select(id: string) {
    this.selected = id;
  }

  next() {
    const ids = this.principles.map(p => p.id);
    if (!this.selected) {
      this.selected = ids[0];
    } else {
      const i = ids.indexOf(this.selected);
      this.selected = ids[(i + 1) % ids.length];
    }
  }

  getColor(id: string): string {
    const p = this.principles.find(x => x.id === id);
    return p ? `${p.color} bg-opacity-75` : '';
  }
}
