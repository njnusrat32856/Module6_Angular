import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const taskId = idParam ? +idParam : null;

    if (taskId !== null) {
      const foundTask = this.taskService.getTaskById(taskId);
      if (foundTask) {
        this.task = foundTask;
        return;
      }
    }

    
    this.router.navigate(['/tasks']);
  }
}
