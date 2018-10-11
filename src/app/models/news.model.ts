export class News {
  public id: number;
  public title: string;
  public subtitle: string;
  public article: string;

  public constructor(id: number, title: string, subtitle: string, article: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.article = article;
  }
}