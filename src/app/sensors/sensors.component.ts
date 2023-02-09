import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISensor } from '../shared/models/ISensor';
import { SensorsService } from '../shared/services/sensors.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  initialSelection = [];
  allowMultiSelect = false;
  selection = new SelectionModel<ISensor>(this.allowMultiSelect, this.initialSelection);

  sensors: ISensor[] = [];

  displayedColumns: string[] = ['id', 'sensorType', 'rangeStart', 'rangeEnd', 'value', 'details', 'delete'];

  constructor(private sensorsService: SensorsService, private router: Router) { }

  ngOnInit(): void {
    this.sensorsService.getSensors().subscribe({
      next: sensors => {
        this.sensors = sensors;
        console.log(`getSensors subscribe -> next notification: ` + JSON.stringify(this.sensors));
      },
      error: err => {
        console.log(`getSensors subscribe -> error notification`);
      },
      complete() {
        console.log(`getSensors subscribe -> complete notification`);
      },
    })
  }

  onDetailsClick(sensorId: number) {
    this.router.navigate(
      ['/sensors', sensorId]
    )
  }

  onDeleteClick(sensorId: number) {
    this.sensorsService.deleteSensor(sensorId).subscribe(() => this.ngOnInit());
  }
}
