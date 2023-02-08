import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsComponent } from './sensors/sensors.component';

const routes: Routes = [
  {path: '', redirectTo: '/sensors', pathMatch: 'full'},
  {path: 'sensors', component: SensorsComponent},
  // {path: 'movies/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
