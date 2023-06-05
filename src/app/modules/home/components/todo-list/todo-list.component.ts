import { Component, DoCheck, OnInit } from '@angular/core';

import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {

  // Array com os itens da Lista
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]'); // passando a lista pra dentro do local Storage

  constructor(){}

  ngDoCheck(): void {
    this.setLocalStorate(); //Função para salvar lista 
  }
 
  //Seta o evento de addItem -> todo-input-add
  public setEmitTaskList(event:string){ 
    this.taskList.push({task:event, checked:false}); //adiciona na lista o evento captado no todo-input-add
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

  //Deletar quando item da lista for todo apagado
  public validaInput(event:string, index:number){
    if(!event.length){
      const confirm = window.confirm("tarefa vazia, deseja deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  //Função para salvar lista no navegador
  public setLocalStorate(){
    if(this.taskList){
      //Itens com checked no final da list
    this.taskList.sort((first,last) => Number(first.checked) - Number(last.checked)); 

    //Salvar lista no Local Storage
    localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}

