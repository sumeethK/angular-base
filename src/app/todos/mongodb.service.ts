import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TodoItem } from 'app/todos/model/todo-item';


@Injectable()
export class MongodbService {
  private _getUrl = '/api/todoList';
  private _postUrl = '/api/todo';
  private _putUrl = '/api/todo/';
  private _deleteUrl = '/api/todo/';


  constructor(private _http: Http) { }
  addTodo(todo: any): any {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this._http.post(this._postUrl, JSON.stringify(todo), options)
      .map((response: Response) => response.json());
  }
  delete(todo: TodoItem): any {
    return this._http.delete(this._deleteUrl + todo._id)
    .map((response: Response) => response.json());
  }

  updateTodo(todo: TodoItem): any {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + todo._id, JSON.stringify(todo), options)
    .map((response: Response) => response.json());
  }

  getAllTodos() {
    return this._http.get(this._getUrl)
      .map((res: Response) => res.json());
  }




}
