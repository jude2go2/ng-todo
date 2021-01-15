import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private mock: ITodo[] = [
    {
      title: 'Long-billed corella',
      description: 'Cacatua tenuirostris',
      isCompleted: true,
      isArchived: true,
      endDate: '4/18/2020',
    },
    {
      title: 'Ibis, sacred',
      description: 'Threskionis aethiopicus',
      isCompleted: true,
      isArchived: true,
      endDate: '6/14/2020',
    },
    {
      title: 'Bird, magnificent frigate',
      description: 'Fregata magnificans',
      isCompleted: false,
      isArchived: false,
      endDate: '6/26/2020',
    },
    {
      title: 'Common brushtail possum',
      description: 'Trichosurus vulpecula',
      isCompleted: true,
      isArchived: false,
      endDate: '6/5/2020',
    },
    {
      title: 'Banded mongoose',
      description: 'Mungos mungo',
      isCompleted: true,
      isArchived: false,
      endDate: '12/4/2020',
    },
    {
      title: 'Jacana, african',
      description: 'Actophilornis africanus',
      isCompleted: true,
      isArchived: true,
      endDate: '10/11/2020',
    },
    {
      title: 'Eagle, african fish',
      description: 'Haliaetus vocifer',
      isCompleted: false,
      isArchived: false,
      endDate: '12/13/2020',
    },
    {
      title: 'Tortoise, asian foreset',
      description: 'Manouria emys',
      isCompleted: false,
      isArchived: false,
      endDate: '4/30/2020',
    },
  ];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this.mock
  );

  constructor() {}

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
