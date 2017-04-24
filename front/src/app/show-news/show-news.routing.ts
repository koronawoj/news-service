import { RouterModule, Routes } from '@angular/router';
import { ShowNewsComponent } from './show-news.component';


const routesConfig:Routes = [
  {path:'show', component: ShowNewsComponent,
  },

]

export const routerModule = RouterModule.forChild(routesConfig)
