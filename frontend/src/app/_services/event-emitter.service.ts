import {EventEmitter, Injectable} from '@angular/core';
import {HostInfoStr} from "../_model/hostInfo";
import {CodeEmitterStr} from "../_model/code";
import {ResponseStr} from "../_model/service";
import {ExercisesStr} from "../_model/exercises";
import {ClassroomStr} from "../_model/classroom";

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  newOpMode = new EventEmitter();
  hostInfo = new EventEmitter();
  loginChange = new EventEmitter();
  code = new EventEmitter();
  exercise = new EventEmitter();
  classroom = new EventEmitter();

  constructor() { }

  // Detect when login or logout happens
  setLoginChange(data: ResponseStr) {
    this.loginChange.emit(data);
  }

  // Keep the HostInfo updated
  setHostInfo(data: HostInfoStr) {
    this.hostInfo.emit(data);
  }

  setNewOpMode(data: string) {
    this.newOpMode.emit(data);
  }

  setCode(code: CodeEmitterStr) {
    //console.log(code);
    this.code.emit(code);
  }

  setExercise(exercise: ExercisesStr) {
    //console.log(code);
    this.exercise.emit(exercise);
  }

  setClassroom(classroom: ClassroomStr) {
    //console.log(code);
    this.classroom.emit(classroom);
  }
}