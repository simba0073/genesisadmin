import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./createorder.component').then(m => m.CreateorderComponent),
    data: {
      title: $localize`View`
    }

}
]