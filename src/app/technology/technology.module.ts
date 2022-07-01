import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologysComponent } from './technologys/technologys.component';
import { MatTableModule } from '@angular/material/table'  
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    TechnologysComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class TechnologyModule { }
