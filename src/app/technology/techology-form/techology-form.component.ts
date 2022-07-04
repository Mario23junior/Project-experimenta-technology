import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TechnologysService } from '../services/technologys.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-techology-form',
  templateUrl: './techology-form.component.html',
  styleUrls: ['./techology-form.component.css']
})
export class TechologyFormComponent implements OnInit {

  private formBuilder: FormBuilder
  public form: FormGroup
  private service: TechnologysService
  private snackBar: MatSnackBar
  private location: Location


  constructor(formBuilder: FormBuilder, service: TechnologysService, snackBar: MatSnackBar, location: Location) {
    this.formBuilder = formBuilder
    this.service = service
    this.location = location
    this.snackBar = snackBar
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(),
        error => this.onError())
  }

  onCancel() {
     this.location.back()
  }

  private onError() {
    this.snackBar.open('Erro ao salvar uma nova tecnologia,por favor tente mais tarde', '',
      { duration: 5000, panelClass: ['mat-toolbar', 'mat-warn'] })
  }

  private onSuccess() {
    this.snackBar.open('Tecnlogia salva com sucesso !', '',
      { duration: 5000, panelClass: ['mat-toolbar', 'mat-Accent'] })
      this.onCancel()
  }

}
