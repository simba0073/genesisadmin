import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./viewequiry.component').then(m => m.ViewequiryComponent),
    data: {
      title: $localize`View`
    }

}
]