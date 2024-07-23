import { Routes } from '@angular/router';
import { ViewequiryComponent } from './viewequiry/viewequiry.component';
import { SingleEnquiryResolver } from './viewequiry/viewequiry.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./enquiries.component').then((m) => m.EnquiriesComponent),
    // data: {
    //   title: $localize`Equiries`
    // },



}];
