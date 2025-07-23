import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa-input',
  templateUrl: './tarefa-input.html',
  styleUrls: ['./tarefa-input.css'],
  standalone: false
})
export class TarefaInput {
   // Modelo para armazenar o valor digitado pelo usuário
  novaTarefa: string = '';

   // Evento enviado para o componente pai
  @Output() tarefaAdicionada = new EventEmitter<string>();

  adicionar() {
    const texto = this.novaTarefa.trim();
    if (texto) {
      this.tarefaAdicionada.emit(texto);//envia para o App
      this.novaTarefa = ''; //limpa o campo
    }
  }
}