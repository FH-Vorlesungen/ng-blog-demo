import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Blog} from '../../model/blog.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-overview-content',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './blog-overview-content.component.html',
  styleUrl: './blog-overview-content.component.scss'
})
export class BlogOverviewContentComponent {
  @Input() blog!: Blog;
  @Output() whenDeleteTriggered = new EventEmitter<Blog>();

  deletePost() {
    this.whenDeleteTriggered.emit(this.blog);
  }
}
