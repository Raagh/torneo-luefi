import { Injectable } from '@angular/core';
import { teamsMock } from './teams.mock';
import { Team } from '../../../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public getTeams(): Array<Team> {
    var json = JSON.parse(teamsMock);
    return json.map(x => new Team(x.equipo_id, x.nombre, x.escudo));
  }

  constructor() { }
}
