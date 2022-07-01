import { Component, OnInit } from '@angular/core';
import { Technology } from '../model/technology';

@Component({
  selector: 'app-technologys',
  templateUrl: './technologys.component.html',
  styleUrls: ['./technologys.component.css']
})
export class TechnologysComponent implements OnInit {

  languagems: Technology[] = [
    { _id: '1', name: 'angular', category: 'front-end' }
  ]
  displayedColumns = ['name', 'category']

  constructor() {
  }

  ngOnInit(): void {
  }

}
