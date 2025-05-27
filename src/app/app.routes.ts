import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/home'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // Main application routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            {
                path: 'qualite-architecture',
                loadChildren: () => import('app/modules/qualite-architecture/qualite-architecture.routes')
            },
            {
                path: 'iot-domotique',
                loadChildren: () => import('app/modules/iot-domotique/iot-domotique.routes')
            },
            {
                path: 'cloud-iac',
                loadChildren: () => import('app/modules/cloud-iac/cloud-iac.routes')
            },
            {
                path: 'wordpress',
                loadChildren: () => import('app/modules/wordpress/wordpress.routes')
            },
            {
                path: 'home',
                loadChildren: () => import('app/modules/home/home.routes')
            },
            // catch-all
            { path: '**', redirectTo: 'home' }
        ]
    }
];