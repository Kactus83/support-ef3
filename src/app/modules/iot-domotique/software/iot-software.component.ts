import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { MatButtonModule }   from '@angular/material/button';
import { MatIconModule }     from '@angular/material/icon';

type SoftwareId =
  | 'mqtt'
  | 'lora'
  | 'zigbee'
  | 'homeassistant'
  | 'googlehome'
  | 'alexa';

@Component({
  selector: 'app-iot-software',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './iot-software.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IotSoftwareComponent {
  /** ID de l’overlay ouvert */
  overlay: SoftwareId | null = null;

  /** Définitions des protocoles IoT */
  protocols = [
    {
      id: 'mqtt',
      title: 'MQTT',
      icon: 'router',
      desc: 'Pub/Sub léger, QoS 0-2, topics hiérarchiques, idéal pour capteurs faiblement puissants.'
    },
    {
      id: 'lora',
      title: 'LoRa',
      icon: 'wifi_tethering',
      desc: 'Longue portée (up to 10 km), faible débit, réseau point-à-multipoint via gateways.'
    },
    {
      id: 'zigbee',
      title: 'Zigbee',
      icon: 'share',
      desc: 'Réseau mesh court-portée, faible consommation, standardisé en clusters pour capteurs/actionneurs.'
    }
  ];

  /** Définitions des passerelles/domotiques */
  gateways = [
    {
      id: 'homeassistant',
      title: 'Home Assistant',
      icon: 'home',
      desc: 'Solution open-source, YAML & UI Lovelace, plus de 2000 intégrations et automatisations flexibles.'
    },
    {
      id: 'googlehome',
      title: 'Google Home',
      icon: 'smart_display',
      desc: 'Assistant cloud-based, Actions SDK & Dialogflow, simple pour commandes vocales, écosystème Google.'
    },
    {
      id: 'alexa',
      title: 'Amazon Alexa',
      icon: 'record_voice_over',
      desc: 'Skills Kit, APIs pour smart home, routines vocales, large compatibilité matérielle.'
    }
  ];

  /** Ouvre l’overlay */
  open(id: SoftwareId) {
    this.overlay = id;
  }

  /** Ferme l’overlay */
  close() {
    this.overlay = null;
  }
}
