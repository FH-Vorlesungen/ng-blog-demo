import {Component, inject} from '@angular/core';
import {BlogsDataService} from "./blogs-data.service";
import {AsyncPipe} from "@angular/common";
import {CardComponent} from "../../card/card.component";
import {RouterLink} from "@angular/router";
import {BlogOverviewContentComponent} from './blog-overview-content/blog-overview-content.component';
import {Blog} from '../model/blog.model';

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    CardComponent,
    RouterLink,
    BlogOverviewContentComponent
  ],
  templateUrl: './blog-overview.component.html',
  styleUrl: './blog-overview.component.scss',
  providers: [BlogsDataService]
})
export class BlogOverviewComponent {

  public blogs$;
  private blogsDataService = inject(BlogsDataService);

  constructor() {
    this.blogs$ = this.blogsDataService.blogs$;
  }

  whenDeleteTriggered(blog: Blog) {
    this.blogsDataService.delete(blog)
  }
}
