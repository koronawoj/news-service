import { Routes, RouterModule } from '@angular/router';

const routesConfig:Routes = [
  {path:'', redirectTo:'show', pathMatch:'full'},
  {path:'**', redirectTo:'show', pathMatch:'full'},
]

export const routerModule = RouterModule.forRoot(routesConfig, {

})
