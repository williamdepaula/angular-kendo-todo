import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{
	todos = [
		{item: "Lavar o carro"},
		{item: "Fazer trabalho de Alg II"},
		{item: "Agendar Dentista"},
	];

	addTodo(input: HTMLBRElement) {
		this.todos = [{ item: input.value }, ...this.todos];
		input.value = '';
	}

	removeTodo(todo, i) {
		this.todos.splice(i, 1);
	}
}
