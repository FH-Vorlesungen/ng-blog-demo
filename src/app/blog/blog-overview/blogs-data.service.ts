import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Blog} from '../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogsDataService {

  private blogsSubject = new BehaviorSubject<Blog[]>([]);
  public blogs$ = this.blogsSubject.asObservable();

  constructor() {
    const mock: Blog[] = [];
    for (let i = 0; i < 100; i++) {
      mock.push(new Blog(i.toString(), 'Hallo' + i));
    }
    this.blogsSubject.next(mock);
  }

  delete(blog: Blog) {
    const posts = this.blogsSubject.getValue();
    const index = posts.findIndex(b => b.id === blog.id);
    this.blogsSubject.next(posts);
  }
}
