import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      id: 1,
      title: 'Long-billed corella',
      description: 'Cacatua tenuirostris',
      isCompleted: false,
      isArchived: true,
      endDate: '4/18/2020',
      selected: true,
    },
    {
      id: 2,
      title: 'Ibis, sacred',
      description: 'Threskionis aethiopicus',
      isCompleted: false,
      isArchived: true,
      endDate: '6/14/2020',
      selected: false,
    },
    {
      id: 3,
      title: 'Bird, magnificent frigate',
      description: 'Fregata magnificans',
      isCompleted: false,
      isArchived: false,
      endDate: '6/26/2020',
      selected: false,
    },
    {
      id: 4,
      title: 'Common brushtail possum',
      description: 'Trichosurus vulpecula',
      isCompleted: false,
      isArchived: false,
      endDate: '6/5/2020',
      selected: false,
    },
    {
      id: 5,
      title: 'Banded mongoose',
      description: 'Mungos mungo',
      isCompleted: false,
      isArchived: false,
      endDate: '12/4/2020',
      selected: false,
    },
    {
      id: 6,
      title: 'Jacana, african',
      description: 'Actophilornis africanus',
      isCompleted: false,
      isArchived: true,
      endDate: '10/11/2020',
      selected: false,
    },
    {
      id: 7,
      title: 'Eagle, african fish',
      description: 'Haliaetus vocifer',
      isCompleted: false,
      isArchived: false,
      endDate: '12/13/2020',
      selected: false,
    },
    {
      id: 8,
      title: 'Tortoise, asian foreset',
      description: 'Manouria emys',
      isCompleted: false,
      isArchived: false,
      endDate: '4/30/2020',
      selected: false,
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.mock
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this.mock[0]
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }
}
