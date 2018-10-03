export class News {
  public Id: number;
  public Title: string;
  public Subtitle: string;
  public Article: string;

  public constructor(id: number, title: string, subtitle: string, article: string) {
    this.Id = id;
    this.Title = title;
    this.Subtitle = subtitle;
    this.Article = article;
  }
}