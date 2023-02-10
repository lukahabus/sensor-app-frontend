import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { SensorsComponent } from './sensors/sensors.component';

const routes: Routes = [
  //po default-u je pathMatch: 'prefix'
  //Angular traži postoji li nakon base url-a prefix sensors npr.
  //Ako ovdje nema pathMatch full, browser će tražiti http://localhost:4200/ jer smo u path-u definirali prazan string
  {path: '', redirectTo: '/sensors', pathMatch: 'full'},
  {path: 'sensors', component: SensorsComponent},
  // { path: 'sensors', component: SensorsComponent, resolve: { sensors: SensorsResolver } },
  {path: 'sensors/:id', component: SensorDetailsComponent},
  //404 NOT FOUND COMPONENT
  { path: '**', redirectTo: '/sensors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
