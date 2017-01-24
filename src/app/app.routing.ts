import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RunAwayComponent } from './run-away/run-away.component';
import { GetWeaponComponent } from './get-weapon/get-weapon.component';
import { PlayDeadComponent } from './play-dead/play-dead.component';



const appRoutes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },

  {
    path:'run-away',
    component: RunAwayComponent
  },

  {
    path: 'play-dead',
    component: PlayDeadComponent
  },

  {
    path:'run-away/get-weapon',
    component: GetWeaponComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
