import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../shared/services/team/team.service';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-home-crest-carousel',
  templateUrl: './home-crest-carousel.component.html',
  styleUrls: ['./home-crest-carousel.component.scss']
})
export class CrestCarouselComponent implements OnInit {

  public teams: Array<Team>;
  public slideConfig = {
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 20,
    slidesToScroll: 5,
    autoplay: true,
    useTransform: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };

  constructor(teamService: TeamService) {
    this.teams = teamService.getTeams();
  }

  ngOnInit() {
  }

}
