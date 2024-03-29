import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    const accion = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(accion);
    this.completado = !this.completado;
  }

}
