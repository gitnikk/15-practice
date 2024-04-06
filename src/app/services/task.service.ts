import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  constructor() { }

  getTasks():Task[] {
    return this.tasks;
  }

  addTask(task:Task) {
    this.tasks.push(task);
  }
}
