import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent implements OnInit{
  //output recebe o evento emitido
  @Output() public emitItemTaskList = new EventEmitter();

  // recebe o input de adicionar nova task
  public addItemTaskList:string = "";

  constructor(){}

  ngOnInit(): void {
  }

  // Pega evento emitido para jogar no todo-list
  public submitItemTaskList(){

    this.addItemTaskList = this.addItemTaskList.trim();  // remove os espaços a direita e a esquerda

    if(this.addItemTaskList){ // so adiciona quando tiver algo no input
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList="";
    }
    
  }
}
