import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';


const routesConfig:Routes = [
  {path:'details/:id', component: DetailsComponent,
  },

]

export const routerModule = RouterModule.forChild(routesConfig)
