import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.scss']
})
export class NewsBoxComponent implements OnInit {

  @Input()
  public Title: string;
  @Input()
  public Subtitle: string;
  @Input()
  public Article: string;

  constructor() { }

  ngOnInit() {
  }

}
