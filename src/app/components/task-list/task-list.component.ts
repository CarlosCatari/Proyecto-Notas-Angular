import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  
  tasks!: Task[];
  constructor(
    public taskService: TaskService
  ){}

  ngOnInit(){
    this.tasks = this.taskService.getTask();
    console.log(this.tasks);
  }
}
