import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team/team.service';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-home-crest-carrousel',
  templateUrl: './home-crest-carrousel.component.html',
  styleUrls: ['./home-crest-carrousel.component.scss']
})
export class CrestCarrouselComponent implements OnInit {

  private readonly teamService: TeamService;
  public teams: Array<Team>;

  constructor(teamService: TeamService) {
    this.teamService = teamService;
    this.teams = teamService.getTeams();
  }

  ngOnInit() {
  }

}
