import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Task } from '../models/task.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private isBrowser: boolean;
  private readonly STORAGE_KEY = 'tasks';

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const storedTasks = localStorage.getItem(this.STORAGE_KEY);
      if (storedTasks) {
        this.tasksSubject.next(JSON.parse(storedTasks));
      }
    }
  }

  private updateLocalStorage(tasks: Task[]) {
    if (this.isBrowser) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    }
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasksSubject.value);
  }

  getTaskById(id: number): Task | null {
    const tasks = this.tasksSubject.value;
    return tasks.find(task => task.id === id) || null;
  }

  addTask(task: Task) {
    const tasks = [...this.tasksSubject.value, task];
    this.tasksSubject.next(tasks);
    this.updateLocalStorage(tasks);
  }

  updateTask(updatedTask: Task) {
    const tasks = this.tasksSubject.value.map(t =>
      t.id === updatedTask.id ? updatedTask : t
    );
    this.tasksSubject.next(tasks);
    this.updateLocalStorage(tasks);
  }

  deleteTask(id: number) {
    const tasks = this.tasksSubject.value.filter(t => t.id !== id);
    this.tasksSubject.next(tasks);
    this.updateLocalStorage(tasks);
  }

  toggleTaskCompletion(id: number) {
    const tasks = this.tasksSubject.value.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.tasksSubject.next(tasks);
    this.updateLocalStorage(tasks);
  }

  filterTasks(completed: boolean): Task[] {
    return this.tasksSubject.value.filter(task => task.completed === completed);
  }
}
