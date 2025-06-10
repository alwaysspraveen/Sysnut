import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/dashboard';
import { AboutUs } from '../pages/about-us/about-us';
import { ContactUs } from '../pages/contact-us/contact-us';
import { Cloud } from './Components/pages.services/cloud/cloud';
import { Server } from './Components/pages.services/server/server';
import { Network } from './Components/pages.services/network/network';
import { EndUser } from './Components/pages.services/end-user/end-user';
import { Hardware } from './Components/pages.services/hardware/hardware';
import { Business } from './Components/pages.services/business/business';
import { Web } from './Components/pages.services/web/web';
import { Recovery } from './Components/pages.services/recovery/recovery';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'cloud-infrastructure', component: Cloud },
  { path: 'server-storage-solutions', component: Server },
  { path: 'network-design-optimization', component: Network },
  { path: 'end-user-computing-support', component: EndUser },
  { path: 'hardware-software-procurement', component: Hardware },
  { path: 'web-development', component: Web },
  { path: 'disaster-recovery', component: Recovery },
  { path: 'business-automation', component: Business },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // fallback route
];
