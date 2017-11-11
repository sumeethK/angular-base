import { Session } from "selenium-webdriver";

export class Init {

  constructor() { this.load()}

  load(){

    if(localStorage.getItem("todos")=== null || 
    localStorage.getItem("todos")== undefined){
console.log("No Todos found!")
       var todos =[
        {text:'Do pranayam', id : 1 },
        {text:'Wash cloths' , id : 2   } ,
        {text:'Study for ssc cgl', id : 3    },
      ];
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("Added default todos...")
    }else{
      console.log("Todos Found!");
      sessionStorage.setItem("AppName ","AngularBase");
    }
  }

  reloadTodo(todos){
    localStorage.setItem("todos", JSON.stringify(todos));
  }

      

}
