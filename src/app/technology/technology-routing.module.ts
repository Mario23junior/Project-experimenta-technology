import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologysComponent } from './technologys/technologys.component';
import { TechologyFormComponent } from './techology-form/techology-form.component';

const routes: Routes = [
  { path: '', component: TechnologysComponent },
  { path: 'new', component: TechologyFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
