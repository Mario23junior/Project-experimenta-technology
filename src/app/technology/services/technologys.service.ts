import { Injectable } from '@angular/core';
import { Technology } from '../model/technology';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TechnologysService {

  private httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  list(): Technology[] {
    return [
      { _id: '1', name: 'angular', category: 'front-end' }
    ]
  }
}
