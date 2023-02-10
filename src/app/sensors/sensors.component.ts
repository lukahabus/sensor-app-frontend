import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorsService } from '../shared/services/sensors.service';
import { ISensor } from '../shared/models/ISensor';

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

  displayedColumns: string[] = ['id', 'sensorType', 'rangeStart', 'rangeEnd', 'value', 'details', 'delete', 'add'];

  constructor(private router: Router, private sensorsService: SensorsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllSensors();

    this.activatedRoute.data.subscribe((data) => {
      this.sensors = data['sensors'];
    })
  }

  getAllSensors() {
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
    this.sensorsService.deleteSensor(sensorId).subscribe(() => this.getAllSensors());
  }

  onAddClick(id: number) {
    const sensor = this.sensorsService.getSensor(id).subscribe({
      next(s) {
        console.log(s);

      }

    });
    //console.log(sensor);

    // sensor.subscribe({
    //   next(s) {
    //     //console.log(s);

    //   }
    // })

    //this.sensorsService.addSensor(sensor).subscribe(() => this.getAllSensors());
  }
}
