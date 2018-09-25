export class Team {
  public Id: number;
  public Name: string;
  public Crest: string;

  public constructor(id: number, name: string, crest: string) {
    this.Id = id;
    this.Name = name;
    this.Crest = crest;
  }
}