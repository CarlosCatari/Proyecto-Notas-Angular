import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(
    public taskService: TaskService
  ){}

  deleteTask(task: Task){
    if (confirm("Eliminar definitivamente")) {
      this.taskService.deleteTask(task);
    }
  }
}
