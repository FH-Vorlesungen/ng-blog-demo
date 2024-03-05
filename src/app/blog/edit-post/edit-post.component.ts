import {Component, inject, Input} from '@angular/core';
import {Post} from "../model/post.model";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, AsyncPipe],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss'
})
export class EditPostComponent {
  @Input({required: true}) post!: Post;
  public group: FormGroup;
  private titleControl: FormControl<string>;
  private contentControl: FormControl<string>;

  private formsBuilder = inject(FormBuilder);

  constructor() {
    this.titleControl = this.formsBuilder.nonNullable.control('');
    this.contentControl = this.formsBuilder.nonNullable.control('');
    this.group = this.formsBuilder.group({'title':this.titleControl,'content':this.contentControl})
  }
}
