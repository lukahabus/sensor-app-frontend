import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { SensorsComponent } from './sensors/sensors.component';

const routes: Routes = [
  {path: '', redirectTo: '/sensors', pathMatch: 'full'},
  {path: 'sensors', component: SensorsComponent},
  {path: 'sensors/:id', component: SensorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
