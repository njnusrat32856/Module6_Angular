import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  task: Task = this.createEmptyTask();

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  onSubmit(): void {
    const title = this.task.title.trim();
    if (!title) return;

    const newTask: Task = {
      ...this.task,
      id: Date.now(), 
      title
    };

    this.taskService.addTask(newTask);
    this.router.navigate(['/tasks']);
  }

  private createEmptyTask(): Task {
    return {
      id: 0,
      title: '',
      description: '',
      completed: false
    };
  }

}
