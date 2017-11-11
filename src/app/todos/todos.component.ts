import { Component, OnInit } from '@angular/core';
import { TodoService } from 'app/todos/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService]
})
export class TodosComponent implements OnInit {
  todos;
  tmpId : number;
  tempText: string = "Enter a new task";
  appState: string = "DEFAULT";
  oldText: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log("Initializing todos component..")
    this.todos = this.todoService.getAllTodos();
  }

  addTodo() {
    var newTodo = { text: this.tempText ,
                    id : this.nextId()              
    };
    console.log("Adding new task  '" + newTodo.text);
    this.todos.push(newTodo);
    this.todoService.addTodo(newTodo);
  }

  private nextId():number{
    var maxId = 0;
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id > maxId) {
        maxId = this.todos[i].id;
      }
    }
    return ++maxId;
  }

  deleteTodo(toBeDeleted) {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == toBeDeleted.id) {
        console.log("Task '" + this.todos[i].text + "' deleted ");
        this.todos.splice(i, 1);
      }
    }
    this.todoService.addAllTodos(this.todos);
  }

  deleteAll() {
    this.todos = [];
    this.todoService.addAllTodos(this.todos);
  }

  enableEditMode(todoTobeUpdated) {
    this.appState = "EDIT";
    this.tmpId = todoTobeUpdated.id;
    this.tempText = todoTobeUpdated.text;
    this.oldText = todoTobeUpdated.text;
  }

  disableEditMode() {
    this.appState = "DEFAULT";
  }

  isEditable(): boolean {
    if (this.appState == "EDIT")
      return true;
    else return false;
  }

  isNotEmpty():boolean{
    return ! (this.todos.length==0);
  }

  updateTodo() {
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id == this.tmpId) {
        console.log("Updating  '" + this.todos[i].text + "' to  "+ this.tempText);
        this.todos[i].text = this.tempText;
        console.log("updated to   '" + this.todos[i].text + "'");
      }
    }
    this.todoService.addAllTodos(this.todos);

  }

}
