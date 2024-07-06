import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }
  getTask(){
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson === null) {
      return this.tasks;
    }else{
      this.tasks = JSON.parse(tasksJson);
      return this.tasks;
    }
  }

  addTask(task: Task) {
    this.tasks.push(task);
    let tasks: Task[] = [];
    const tasksJson = localStorage.getItem('tasks');
    
    if (tasksJson === null) {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(tasksJson);
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task){
    for (let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i,1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}


