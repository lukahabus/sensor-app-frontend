import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISensor } from '../shared/models/ISensor';
import { SensorsService } from '../shared/services/sensors.service';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.scss']
})
export class SensorDetailsComponent implements OnInit {

  sensor: ISensor | undefined;

  constructor(private route: ActivatedRoute, private sensorsService: SensorsService) {}

  ngOnInit(): void {
    let sensorId = this.route.snapshot.paramMap.get('id');
    if(sensorId != null) {
      this.sensorsService.getSensor(+sensorId).subscribe((sensor: ISensor) =>{
        this.sensor = sensor;
      })
    }
  }

}
