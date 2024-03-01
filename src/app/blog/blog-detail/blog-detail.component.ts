import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Observable, tap} from "rxjs";
import {BlogDetailDataService} from "./blog-detail-data.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
  imports: [
    AsyncPipe,
    RouterLink
  ],
  providers: [BlogDetailDataService]
})
export class BlogDetailComponent {
  private activedRoute = inject(ActivatedRoute);
  private blogDetailDataService = inject(BlogDetailDataService);
  public blogDetails$: Observable<any> | undefined = undefined;

  constructor() {
    this.activedRoute.params.pipe(takeUntilDestroyed(),
      tap((params) => {
        console.log(params);
        this.blogDetails$ = this.blogDetailDataService.getBlogDetailsById(+params['id'])
      }))
      .subscribe();
  }
}
