import { Component } from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    JsonPipe,
    FormsModule
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  public model = {title:null,content:null}
}
