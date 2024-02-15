import {Routes} from '@angular/router';
import {BlogOverviewComponent} from "./blog/blog-overview/blog-overview.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => HomeComponent
  },
  {
    path: 'blogs',
    loadComponent: () => BlogOverviewComponent
  },
  {
    path: 'blogs/:id',
    loadComponent: () => BlogOverviewComponent
  }
];
