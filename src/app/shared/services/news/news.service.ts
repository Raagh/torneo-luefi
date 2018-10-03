import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routes } from '../../../config/api.config';
import { News } from '../../../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private readonly httpClient: HttpClient) { }

  public getNews(): Observable<News[]> {
    return this.httpClient.get<News[]>(Routes.Base + Routes.News);
  }
}
