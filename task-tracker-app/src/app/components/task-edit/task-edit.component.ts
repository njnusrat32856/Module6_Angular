import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const task = this.taskService.getTaskById(id);
    if (task) {
      this.task = { ...task };
    } else {
      this.router.navigate(['/tasks']);
    }
  }

  onSubmit() {
    this.taskService.updateTask(this.task);
    this.router.navigate(['/tasks']);
  }
}
