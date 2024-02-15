import {Component, inject} from '@angular/core';
import {BlogsDataService} from "./blogs-data.service";
import {AsyncPipe} from "@angular/common";
import {tap} from "rxjs";
import {CardComponent} from "../../card/card.component";

@Component({
  selector: 'app-blog-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    CardComponent
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
}
