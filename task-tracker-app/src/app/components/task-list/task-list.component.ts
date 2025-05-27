import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: 'all' | 'completed' | 'pending' = 'all';
  

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
  this.taskService.getTasks()
    .pipe(take(1)) 
    .subscribe({
      next: (tasks: Task[]) => {
        this.tasks = tasks;
        this.applyFilter();
      },
      error: (error: any) => {
        console.error('Failed to load tasks:', error);
      }
    });
  }

  applyFilter(): void {
    switch (this.filter) {
      case 'completed':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      case 'pending':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
      default:
        this.filteredTasks = [...this.tasks];
    }
  }

  onFilterChange(newFilter: 'all' | 'completed' | 'pending'): void {
    this.filter = newFilter;
    this.applyFilter();
  }

  toggleComplete(task: Task): void {
    this.taskService.toggleTaskCompletion(task.id);
  }

  deleteTask(id: number): void {
    const confirmed = confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      this.taskService.deleteTask(id);
    }
  }

  editTask(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  viewDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
