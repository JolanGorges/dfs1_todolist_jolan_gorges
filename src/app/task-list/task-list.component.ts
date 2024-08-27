import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})

export class TaskListComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
      this.tasks = this.taskService.getTasks();
    }
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskCompletion(task: Task): void {
    console.log(`Task ${task.id} completed status: ${task.completed}`);

    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }
}