import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-summary',
  templateUrl: './task-summary.component.html',
  styleUrls: ['./task-summary.component.scss'],
  standalone: true
})
export class TaskSummaryComponent {
  completedTasks = 0;
  pendingTasks = 0;

  constructor(private taskService: TaskService) {
    const summary = this.taskService.getTaskSummary();
    this.completedTasks = summary.completedTasks;
    this.pendingTasks = summary.pendingTasks;
  }
}