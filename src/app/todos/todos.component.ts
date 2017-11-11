import { Component, OnInit } from '@angular/core';
import { TodoService } from 'app/todos/todo.service';
import { TodoItem } from 'app/todos/model/todo-item';
import { Status } from 'app/todos/model/task-status';
import { NgModule } from '@angular/core/src/metadata/ng_module';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoService],
})
export class TodosComponent implements OnInit {
  todosList: TodoItem[];
  todo: TodoItem;
  tmpId: number;
  tempText: string ;
  appState: AppStatus = AppStatus.ADD;
  oldText: string;
  constructor(private todoService: TodoService) {} 

  initializeTodo(){
    this.todo =   {
      id : this.nextId(),
      task: {
        name: "Excersise"
        , description: "Excerise is healthy habit"
        , creationDate: new Date()
        , targetDate: new Date()
        , status:  Status.IN_PROGRESS
        , comments: "Planning to start today"

      },
      creator: "Admin",
      assignee: "Admin"
    }
  }

  ngOnInit() {
    console.log("Initializing todos component..")
    this.todosList = this.todoService.getAllTodos();
    this.initializeTodo();
  }

  addTodo() {
    if (this.todo != null || this.todo != undefined) {
      console.log("Adding new task  '" + this.todo.task.name);
      this.todo.id = this.nextId();
      this.todosList.push(this.todo);
      this.todoService.addTodo(this.todo);
    }
  }

  private nextId(): number {
    if (this.todosList == null || this.todosList == undefined) {
      return 1;
    }
    var maxId = 0;
    for (var i = 0; i < this.todosList.length; i++) {
      if (this.todosList[i].id > maxId) {
        maxId = this.todosList[i].id;
      }
    }
    return ++maxId;
  }

  deleteTodo(toBeDeleted) {
    for (var i = 0; i < this.todosList.length; i++) {
      if (this.todosList[i].id == toBeDeleted.id) {
        console.log("Task '" + this.todosList[i].task.name + "' deleted ");
        this.todosList.splice(i, 1);
      }
    }
    this.todoService.addAllTodos(this.todosList);
  }

  deleteAll() {
    this.todosList = [];
    this.todoService.addAllTodos(this.todosList);
  }

  enableEditMode(todoTobeUpdated) {
    this.appState = AppStatus.EDIT;
    var tmp = todoTobeUpdated;
    this.todo = tmp;
  }

  disableEditMode() {
    this.appState = AppStatus.ADD;
    this.ngOnInit();
  }

  refresh(){
    this.ngOnInit();
  }

  isEditable(): boolean {
    if (this.appState == AppStatus.EDIT)
      return true;
    else return false;
  }

  isNotEmpty(): boolean {
    return !(this.todosList.length == 0);
  }

  updateTodo() {
    var tmp = this.todo;
    for (var i = 0; i < this.todosList.length; i++) {
      if (this.todosList[i].id == tmp.id) {
        console.log("Updating  '" + this.todosList[i].task.name);
        this.todosList[i]= tmp;
      }
    }
    this.todoService.addAllTodos(this.todosList);

  }




}

enum AppStatus { DEFAULT, ADD, EDIT }
