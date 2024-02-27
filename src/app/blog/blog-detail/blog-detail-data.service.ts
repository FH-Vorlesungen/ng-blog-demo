import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogDetailDataService {

  constructor() { }

  getBlogDetailsById(param: number) {
    return of({"title":"Test "+param, "content":"lsdjlkdfiosdoisndvoinsdoiskjlskjf"})
  }
}
