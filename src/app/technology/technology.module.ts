import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologysComponent } from './technologys/technologys.component';
import { MatTableModule } from '@angular/material/table'  
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from '../shared/pipes/category.pipe';
import { TechologyFormComponent } from './techology-form/techology-form.component';



@NgModule({
  declarations: [
    CategoryPipe,
    TechnologysComponent,
    TechologyFormComponent,
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule  
   ]
})
export class TechnologyModule { }
