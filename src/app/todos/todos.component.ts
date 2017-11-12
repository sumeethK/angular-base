import { Component, OnInit, Input } from '@angular/core';
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
  @Input() todoSearch;
  appState: AppStatus = AppStatus.ADD;

  
  constructor(private todoService: TodoService) { }

  initializeTodo() {
    this.todo = {
      id: this.nextId(),
      task: {
        name: 'Default'
        , description: 'Default'
        , creationDate: new Date()
        , targetDate: new Date()
        , status: Status.IN_PROGRESS
        , comments: 'default'

      },
      creator: 'default',
      assignee: 'default'
    };
  }

  ngOnInit() {
    console.log('Initializing todos component..');
    this.todosList = this.todoService.getAllTodos();
    this.initializeTodo();
  }

  addTodo() {
    if (this.todo != null || this.todo !== undefined) {
      console.log('Adding new task  \'' + this.todo.task.name);
      this.todo.id = this.nextId();
      const tmp: TodoItem =this.createNewFrom(this.todo);
      if (this.todosList == null) {
        this.todosList = [];
      }
      this.todosList.push(tmp);
      this.todoService.addTodo(tmp);
    }
  }


  createNewFrom(newTodo): TodoItem{
    const tmp: TodoItem =  {
      id: newTodo.id,
      task: {
        name: newTodo.task.name
        , description: newTodo.task.description
        , creationDate: newTodo.task.creationDate
        , targetDate: newTodo.task.targetDate
        , status: newTodo.task.status
        , comments: newTodo.task.comments

      },
      creator: newTodo.creator,
      assignee: newTodo.assignee
    };
    return tmp;

  }

  private nextId(): number {
    if (this.todosList == null || this.todosList === undefined) {
      return 1;
    }
    let maxId = 0;
    for (let i = 0; i < this.todosList.length; i++) {
      if (this.todosList[i].id > maxId) {
        maxId = this.todosList[i].id;
      }
    }
    return ++maxId;
  }

  deleteTodo(toBeDeed) {
    for (let i = 0; i < this.todosList.length; i++) {
      if (this.todosList[i].id === toBeDeed.id) {
        console.log('Task \'' + this.todosList[i].task.name + '\' deed ');
        this.todosList.splice(i, 1);
        break;
      }
    }
    this.todoService.addAllTodos(this.todosList);
  }

  done(toBeDone) {
    for (let i = 0; i < this.todosList.length; i++) {
      if (this.todosList[i].id === toBeDone.id) {
        console.log('Task \'' + this.todosList[i].task.name + '\' comped ');
        this.todosList[i].task.status = Status.COMPLETED;
        break;
      }
    }
    this.todoService.addAllTodos(this.todosList);
  }
  isDone(todo) {
    if (todo.task.status === Status.COMPLETED) {
      return true;
    }else { return false; }
  }

  deleteAll() {
    this.todosList = [];
    this.todoService.addAllTodos(this.todosList);
  }

  enableEditMode(todoTobeUpdated) {
    this.appState = AppStatus.EDIT;
    this.todo = todoTobeUpdated;
  }

  disableEditMode() {
    this.appState = AppStatus.ADD;
    this.ngOnInit();
  }

  refresh() {
    this.ngOnInit();
  }

  isEditable(): boolean {
    if (this.appState === AppStatus.EDIT) {
      return true;
    }else { return false; }
  }

  isNotEmpty(): boolean {
    if (this.todosList === undefined || this.todosList == null || this.todosList.length === 0) {
      return false;
    } else { return true; }
  }

  updateTodo() {
    const tmp: TodoItem = this.todo;
    for (let i = 0; i < this.todosList.length; i++) {
      if (this.todosList[i].id === tmp.id) {
        console.log('Updating  \'' + this.todosList[i].task.name);
        this.todosList[i] = tmp;
      }
    }
    this.todoService.addAllTodos(this.todosList);

  }




}

enum AppStatus { DEFAULT, ADD, EDIT }
