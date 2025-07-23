import { Component, signal } from '@angular/core';
import { TarefaInput } from './tarefa-input/tarefa-input';
import { TarefaList } from './tarefa-list/tarefa-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class App {
  tarefas: {descricao: string, concluida: boolean}[] = [];
  tarefasConcluidas: number =0

       // Adiciona nova tarefa à lista
  adicionarTarefa(tarefa: string) {
    if (tarefa.trim()) {
      this.tarefas.push({ descricao: tarefa, concluida: false});
    }
  }
  // Marca ou desmarca uma tarefa como concluída
  marcarComoConcluida(index: number){
    const tarefa = this.tarefas[index];

    tarefa.concluida = !tarefa.concluida;

    // Atualiza o contador
    if(tarefa.concluida){
      
      this.tarefasConcluidas++;
    }else{
      this.tarefasConcluidas--;
    }
  }
  
  // Reseta a lista de tarefas, com confirmação do usuário
  resetar(){

    const confirmar = window.confirm("Tem certeza que deseja apagar as tarefas e iniciar os contadores?")

    this.tarefas = [];
    this.tarefasConcluidas = 0;
  }

  // Remover tarefa específica
removerTarefa(index: number) {
  const tarefa = this.tarefas[index];

  const confirmar = window.confirm(`Deseja remover a tarefa: "${tarefa.descricao}"?`);

  if(confirmar){
  if (tarefa.concluida) {
    this.tarefasConcluidas--;
  }

  this.tarefas.splice(index, 1);
}}
}