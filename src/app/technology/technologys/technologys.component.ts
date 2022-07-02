import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Technology } from '../model/technology';
import { TechnologysService } from '../services/technologys.service';

@Component({
  selector: 'app-technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css']
})
export class TechnologysComponent implements OnInit {

  languagems: Observable<Technology[]>;
  displayedColumns = ['name', 'category']

  private technologysService: TechnologysService;

  constructor(technologysService: TechnologysService) {
    this.technologysService = technologysService
    this.languagems = this.technologysService.list()
  }

  ngOnInit(): void {
  }

}
