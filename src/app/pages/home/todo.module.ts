import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {CalendarModule} from 'primeng/calendar';
import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [TodoListComponent, TodoFormComponent],
  imports: [
    SharedModule,
    TodoRoutingModule,
    CalendarModule,
    IMaskModule,
  ]
})
export class TodoModule { }
