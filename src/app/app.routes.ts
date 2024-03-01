import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
    {
      path: '',
      //EXAMPLE: THIS IS NOT LAZY LOADED
      loadComponent: () => HomeComponent
    },
    {
      path: 'blogs',
      loadComponent: () => import('./blog/blog-overview/blog-overview.component')
        .then(c => c.BlogOverviewComponent)
    },
    {
      path: 'blogs/:id',
      loadComponent: () => import('./blog/blog-detail/blog-detail.component')
        .then(c => c.BlogDetailComponent)
    },
  {
    path: 'create-post',
    loadComponent: () => import('./blog/create-post/create-post.component')
      .then(c => c.CreatePostComponent)
  }
    //TODO: Example with child routes
  ];
