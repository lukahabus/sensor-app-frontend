import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SensorsComponent } from './sensors/sensors.component';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { FormsModule } from '@angular/forms';
import { AddUpdateSensorsTypeComponent } from './add-update-sensors-type/add-update-sensors-type.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SensorTypesComponent } from './sensor-types/sensor-types.component';
import { SettingsComponent } from './settings/settings.component';
import { UpdateSensorComponent } from './update-sensor/update-sensor.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    SensorDetailsComponent,
    AddUpdateSensorsTypeComponent,
    MessageDialogComponent,
    NotFoundComponent,
    NotificationsComponent,
    SensorTypesComponent,
    SettingsComponent,
    UpdateSensorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
