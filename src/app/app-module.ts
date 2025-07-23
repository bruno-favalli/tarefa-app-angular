import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { App } from './app';
import { TarefaInput } from './tarefa-input/tarefa-input';
import { TarefaList } from './tarefa-list/tarefa-list';

@NgModule({
  declarations: [
    App,
    TarefaInput,
    TarefaList
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [App]
})
export class AppModule { }