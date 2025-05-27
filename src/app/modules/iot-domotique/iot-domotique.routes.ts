import { Routes } from '@angular/router';
import { IotDomotiqueComponent } from './iot-domotique.component';
import { IotHardwareComponent   } from './hardware/iot-hardware.component';
import { IotSoftwareComponent   } from './software/iot-software.component';
import { IotDemoComponent       } from './demo/iot-demo.component';

export default [
  { path: '',         component: IotDomotiqueComponent },
  { path: 'hardware', component: IotHardwareComponent  },
  { path: 'software', component: IotSoftwareComponent  },
  { path: 'demo',     component: IotDemoComponent      },
  { path: '**',       redirectTo: ''                   }
] as Routes;
