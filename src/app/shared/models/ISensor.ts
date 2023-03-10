import { INotification } from "./INotification";

export interface ISensor {
  id?: number,
  currentStatus : number,
  typeId : number,
  typeDescription? : string,
  typeLowestValueExpected? : number,
  typeHighestValueExpected? : number,
  notifications? : INotification[],

  sensorType: string,
  rangeStart: number,
  rangeEnd: number,
  value: number
}
