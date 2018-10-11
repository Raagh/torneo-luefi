export class Team {
  public id: number;
  public name: string;
  public crest: string;

  public constructor(id: number, name: string, crest: string) {
    this.id = id;
    this.name = name;
    this.crest = crest;
  }
}