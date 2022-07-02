import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Technology } from '../model/technology';
import { TechnologysService } from '../services/technologys.service';

@Component({
  selector: 'app-technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css']
})
export class TechnologysComponent implements OnInit {

  languagems$: Observable<Technology[]>;
  displayedColumns = ['name', 'category']

  private technologysService: TechnologysService;
  public dialog: MatDialog

  constructor(technologysService: TechnologysService,dialog: MatDialog) {
    this.technologysService = technologysService
    this.dialog = dialog
    this.languagems$ = this.technologysService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar informações , por favor volte mais tarde')
          return of([])
        })
      )
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

}
