import { Injectable, Injector } from '@angular/core';
import { Task } from './task.model';
import { BaseResourceService } from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService extends BaseResourceService<Task> {
  constructor(protected injector: Injector) {
    super('api/todoList', injector, Task.fromJson);
  }
}
