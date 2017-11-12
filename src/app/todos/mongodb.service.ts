import { Injectable } from '@angular/core';

@Injectable()
export class MongodbService {

  constructor() { }

  getAllTodos(){
    return JSON.parse(localStorage.getItem('todos'));
  }




}
