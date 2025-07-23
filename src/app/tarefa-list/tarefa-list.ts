import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.html',
  styleUrls: ['./tarefa-list.css'],
  standalone: false
})
export class TarefaList {
  @Input() tarefas: { descricao: string, concluida: boolean }[] = [];

  @Output() tarefaAtualizada = new EventEmitter<number>();
  @Output() tarefaRemovida = new EventEmitter<number>();

  // Alterna entre concluída e ativa
  alternarConclusao(index: number) {
    this.tarefaAtualizada.emit(index);
  }

  // Remove a tarefa da lista
  removerTarefa(index: number) {
    this.tarefaRemovida.emit(index);
  }
}