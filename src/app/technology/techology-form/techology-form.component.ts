import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-techology-form',
  templateUrl: './techology-form.component.html',
  styleUrls: ['./techology-form.component.css']
})
export class TechologyFormComponent implements OnInit {

  private formBuilder: FormBuilder
  public form: FormGroup

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  onCancel() {
    
  }

}
