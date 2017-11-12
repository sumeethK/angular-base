import { Injectable } from '@angular/core';
import { Init } from 'app/todos/init/init';

@Injectable()
export class TodoService extends Init{
  constructor() { 
    super();
    console.log('Todo Service initialized...');
  }

  getAllTodos(){
    return JSON.parse(localStorage.getItem('todos'));
  }

  addTodo(todo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    if(todos!=null){
    todos.push(todo);
    }else{
      todos=[todo];
    }
    this.reloadTodo(todos);
  }



   addAllTodos(newTodos){
     if(newTodos.length==0){
       localStorage.removeItem('todos')
      }else{
        this.reloadTodo(newTodos);
      }
      console.log(newTodos.length + ' todo/s left');
  }

}
