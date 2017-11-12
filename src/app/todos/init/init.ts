import { Session } from 'selenium-webdriver';

export class Init {

  constructor() { this.load() }

  load() {

    if (localStorage.getItem('todos') === null ||
      localStorage.getItem('todos') === undefined) {
      console.log('No Todos found!')
      let todos = [
        {
          id : 1,
          task: {
            name: 'Excersise'
            , description: 'Excerise is healthy habit'
            , creationDate: new Date()
            , targetDate: new Date()
            , status: 'NOT_STARTED'
            , comments: 'Planning to start today'

          },
          creator: 'Admin',
          assignee: 'Admin'

        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log('Added default todos...');
    } else {
      console.log('Todos Found!');
      sessionStorage.setItem('AppName ', 'AngularBase');
    }
  }

  reloadTodo(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }



}
