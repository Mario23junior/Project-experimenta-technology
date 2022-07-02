import { Injectable } from '@angular/core';
import { Technology } from '../model/technology';
import { HttpClient } from '@angular/common/http'
import { first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologysService {

  private httpClient: HttpClient
  private readonly API = '/assets/db.json'

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  list() {
    return this.httpClient.get<Technology[]>(this.API)
    .pipe(
      first(),
      tap(linguagens => console.log(linguagens))
    )
  }
}
