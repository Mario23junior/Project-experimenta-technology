import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TechnologysService } from '../services/technologys.service';

@Component({
  selector: 'app-techology-form',
  templateUrl: './techology-form.component.html',
  styleUrls: ['./techology-form.component.css']
})
export class TechologyFormComponent implements OnInit {

  private formBuilder: FormBuilder
  public form: FormGroup
  private service: TechnologysService

  constructor(formBuilder: FormBuilder,service: TechnologysService) {
    this.formBuilder = formBuilder
    this.service = service
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
     this.service.save(this.form.value).subscribe(result => {
       console.log(result)
     })
  }

  onCancel() {

  }

}
