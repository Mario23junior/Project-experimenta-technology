import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologysComponent } from './technologys/technologys.component';

const routes: Routes = [
  { path: '', component: TechnologysComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule { }
