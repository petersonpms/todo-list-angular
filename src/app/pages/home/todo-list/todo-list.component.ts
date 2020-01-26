import { Component } from '@angular/core';

import { BaseResultListComponent } from '../../../shared/components/base-resource-list/base-resource-list.component';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent extends BaseResultListComponent<Task> {

  constructor(private taskService: TaskService) {
    super(taskService);
  }
}
