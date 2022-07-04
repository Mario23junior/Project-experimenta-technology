import { Injectable } from '@angular/core';
import { Technology } from '../model/technology';
import { HttpClient } from '@angular/common/http'
import { delay, first, take, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TechnologysService {

  private httpClient: HttpClient
  private readonly API = 'api/technology'
  private snackBar: MatSnackBar

  constructor(httpClient: HttpClient, snackBar: MatSnackBar) {
    this.httpClient = httpClient
    this.snackBar = snackBar
  }

  list() {
    return this.httpClient.get<Technology[]>(this.API)
      .pipe(
        first(),
        tap(linguagens => console.log(linguagens))
      )
  }

  save(record:Technology) {
   return this.httpClient.post<Technology>(this.API, record)
   .pipe(first())
  }
}
