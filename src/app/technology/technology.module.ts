import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologysComponent } from './technologys/technologys.component';
import { MatTableModule } from '@angular/material/table'  


@NgModule({
  declarations: [
    TechnologysComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    MatTableModule
  ]
})
export class TechnologyModule { }
