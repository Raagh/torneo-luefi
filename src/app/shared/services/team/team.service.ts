import { Injectable } from '@angular/core';
import { Team } from '../../../models/team.model';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../../../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(Routes.Base + Routes.Teams);
  }
}
