import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ISensor } from '../models/ISensor';
import { SensorsService } from '../services/sensors.service';

@Injectable({
    providedIn: 'root'
})
export class SensorDetailsGuard implements CanActivate {

    constructor(private sensorsService: SensorsService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        //debugger;
        let sensorId = route.paramMap.get('id');

        //Za manipuliranje asinkronih metoda
        return new Promise((resolve) => {
            if (sensorId != null) {
                this.sensorsService.getSensor(+sensorId).subscribe({
                    next: sensor => {
                        resolve(true);
                    },
                    error: err => {
                        alert(`Sensor ${sensorId} doesn't exists`);
                        this.router.navigate(
                            ['/sensors']
                        );
                        resolve(false);
                    }
                });
            }
        })
    }
}
