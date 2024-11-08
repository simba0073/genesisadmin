import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cancelorder.component').then(m => m.CancelorderComponent),
    data: {
      title: $localize`Cancel Order`
    }

}
]