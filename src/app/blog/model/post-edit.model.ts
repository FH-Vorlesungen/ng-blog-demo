export class PostEdit {
  private _title:string;
  private _content:string;


  constructor(title: string, content: string) {
    this._title = title;
    this._content = content;
  }

  get title(): string {
    return this._title;
  }

  get content(): string {
    return this._content;
  }
}
