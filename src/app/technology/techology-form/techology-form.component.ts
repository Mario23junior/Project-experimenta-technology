import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TechnologysService } from '../services/technologys.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor(formBuilder: FormBuilder, service: TechnologysService, snackBar: MatSnackBar) {
    this.formBuilder = formBuilder
    this.service = service
    this.snackBar = snackBar
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError())
  }

  onCancel() {

  }

  private onError() {
    this.snackBar.open('Erro ao salvar cursos', '', { duration: 5000 })

  }

}
