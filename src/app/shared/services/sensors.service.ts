import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISensor } from '../models/ISensor';
import { IDropdown } from '../models/IDropdown';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  private idCount = 0;

  constructor(private http: HttpClient) { }

  getSensors(): Observable<ISensor[]> {

    //http://localhost:8080/api/sensors?delay=true
    const queryParams = new HttpParams()
      .set('delay', false);

    const url = `${apiUrl}api/sensors`;
    return this.http.get<ISensor[]>(url, { params: queryParams })
      .pipe(
        tap(data => {
          console.log('getSensors: ' + JSON.stringify(data));
        })
      );
  }

  getSensor(id: number): Observable<ISensor> {
    //debugger;
    const url = `${apiUrl}api/sensors/${id}`;
    return this.http.get<ISensor>(url)
      .pipe(
        tap(data => {
          console.log('getSensor: ' + JSON.stringify(data));
        }),
        catchError(this.handleError)
      );
  }

  modifySensor(modifiedSensor: ISensor): Observable<any> {
    const url = `${apiUrl}api/sensors`;

    return this.http.put(url, modifiedSensor)
      .pipe(
        tap(taskResponse => console.log('modifySensor op has been successfully finished'))
      );
  }

  addSensor(newSensor: ISensor): Observable<any> {
    const url = `${apiUrl}api/sensors`;

    return this.http.post(url, newSensor)
      .pipe(
        tap(taskResponse => console.log('addSensor op has been successfully finished'))
      );
  }

  getSensorsDropdown(): Observable<IDropdown[]> {
    const url = `${apiUrl}api/sensors/dropdown`;
    return this.http.get<IDropdown[]>(url)
      .pipe(
        tap(data => {
          console.log('getSensorsDropdown: ' + JSON.stringify(data));
        })
      );
  }

  deleteSensor(id: number): Observable<ISensor> {
    const url = `${apiUrl}api/sensors/${id}`;
    return this.http.delete<ISensor>(url);
  }

  private handleError(err: HttpErrorResponse) {
    //U pravim aplikacijama, ovo bi trebali zalogirati negdje u bazi
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      //Client Side Error
      //The error may be due to a network error
      //an error while executing the HTTP request
      //an exception thrown in an RxJS operator.
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else {
      //Server Side Error
      //HTTP status
      //Not found (404)
      //internal Server Error (500)
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
