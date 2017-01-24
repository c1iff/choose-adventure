import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StoryComponent } from './story/story.component';



const appRoutes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },

  {
    path:'story/:id',
    component: StoryComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
