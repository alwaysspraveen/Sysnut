import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/dashboard';
import { AboutUs } from '../pages/about-us/about-us';
import { ContactUs } from '../pages/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'about-us', component: AboutUs },
  { path: 'contatc-us', component: ContactUs },
];
