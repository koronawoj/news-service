import { Routes, RouterModule } from '@angular/router';
import { AddNewsComponent } from './add-news.component';

const routesConfig:Routes = [
  {path:'add', component: AddNewsComponent},
]

export const routerModule = RouterModule.forChild(routesConfig);
