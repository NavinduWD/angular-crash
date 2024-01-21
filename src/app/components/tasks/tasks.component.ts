import { Component } from '@angular/core';

import { Task } from '../../task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks)=> this.tasks = tasks);
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        (task)=> this.tasks = this.tasks.filter((t) => t.id !== task.id)
      );
  }
}
