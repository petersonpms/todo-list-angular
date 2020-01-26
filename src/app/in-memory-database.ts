import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './pages/home/shared/task.model';

export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const todoList: Task[] = [
      { id: 1, description: 'Estudar Angular', date: '26/01/2020', time: '19:00', finished: false },
      { id: 2, description: 'Estudar HTML5', date: '22/01/2020', time: '19:00', finished: false },
      { id: 3, description: 'Estudar CSS3', date: '26/01/2020', time: '14:00', finished: true },
    ];

    return { todoList };
  }
}
