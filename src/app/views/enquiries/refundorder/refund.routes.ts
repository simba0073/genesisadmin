import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./refundorder.component').then(m => m.RefundorderComponent),
    data: {
      title: $localize`Refund`
    }

}
]