import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  private storageKey = 'tasks';
  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(title: string): void {
    const tasks = this.getTasks();
    const newTask: Task = { id: Date.now(), title, completed: false };
    tasks.push(newTask);
    this.saveTasks(tasks);
  }

  updateTask(updatedTask: Task): void {
    let tasks = this.getTasks();
    tasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    this.saveTasks(tasks);
  }

  deleteTask(taskId: number): void {
    let tasks = this.getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    this.saveTasks(tasks);
  }

  private saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  getTaskSummary() {
    const tasks = this.getTasks();
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = tasks.length - completedTasks;
    return { completedTasks, pendingTasks };
  }
}
