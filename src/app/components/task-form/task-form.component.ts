import { Component } from '@angular/core';
import { TaskService} from '../../services/task.service'

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  constructor(
    public taskService: TaskService
  ){}

  addTask(newtitle: HTMLInputElement, newdescription: HTMLTextAreaElement){
    console.log('Agegando...', newtitle.value, newdescription.value);
    this.taskService.addTask({
      title: newtitle.value,
      description: newdescription.value,
      hide: true
    });
    newtitle.value = '';
    newdescription.value = '';
    newtitle.focus();
    return false;
  }
}
