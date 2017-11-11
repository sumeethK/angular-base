import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos;
text;
  constructor() { }

  ngOnInit() {
    this.todos =[
      {text:'Do pranayam'},
      {text:'Wash cloths'},
      {text:'Study for ssc cgl'}
    ]
  }

  addTodo(){
    this.todos.push(
      {text:this.text}
    )
  }

  deleteTodo(object){
        for(var i=0;i<this.todos.length ;i++){
      if(this.todos[i].text==object){
        console.log("Task '" +this.todos[i].text+"' deleted ");
        this.todos.splice(i,1); 
      }
    }
  }

}
