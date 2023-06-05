import { Component, OnInit } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // Array co os itens da Lista
  public taskList: Array<TaskList> = [
   {task: "tarefa 1", checked:true},
   {task: "tarefa 2", checked:false}

  ]

  constructor(){}

  ngOnInit(): void {
    
  }

  // Deletar Item
  public deleteItemTaskList(event:number){
    this.taskList.splice(event,1);
  }

  //Deletar toda lista
  public deleteAllTaskList(){
    const confirm = window.confirm("Deseja apagar toda suas tarefas?")

    if(confirm == true){
      this.taskList = [];
    }
    
  }
  
}

