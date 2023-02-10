import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISensor } from '../shared/models/ISensor';
import { SensorsService } from '../shared/services/sensors.service';
import { Location } from '@angular/common';
import { IDropdown } from '../shared/models/IDropdown';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.scss']
})
export class SensorDetailsComponent implements OnInit {

  actors: IDropdown[] = [];

  sensor: ISensor | undefined;

  constructor(private route: ActivatedRoute, private sensorsService: SensorsService, private location: Location) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData() {
    let sensorId = this.route.snapshot.paramMap.get('id');
    if (sensorId != null) {
      this.sensorsService.getSensor(+sensorId).subscribe((sensor: ISensor) => {
        this.sensor = sensor;
      });

      this.sensorsService.getSensorsDropdown().subscribe((actors: IDropdown[]) => {
        this.actors = actors;
      });
    }
  }

  onSubmit() {
    if (this.sensor != undefined) {
      this.sensorsService.modifySensor(this.sensor).subscribe(() => {
        alert(`${this.sensor?.sensorType} has been successfully modified.`);
      });
    }
  }

  refreshEvent() {
    this.refreshData();
  }

  goBack() {
    this.location.back();
  }

}

// export class SensorDetailsComponent implements OnInit {

//   sensors : ISensor[] = [];

//   displayedColumns: string[] = ['id', 'sensorType', 'rangeStart', 'rangeEnd', 'value', 'delete'];

//   constructor(private route: ActivatedRoute, private sensorsService: SensorsService) {}

//   ngOnInit(): void {
//     let sensorId = this.route.snapshot.paramMap.get('id');
//     if(sensorId != null) {
//       this.sensorsService.getSensor(+sensorId).subscribe((sensor: ISensor) =>{
//         let sensorsTemp : ISensor[] = [];
//         sensorsTemp.push(sensor);
//         this.sensors = [...sensorsTemp];
//       })
//     }
//   }
// }
