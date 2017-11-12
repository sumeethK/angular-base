import { Task } from 'app/todos/model/task';

export interface TodoItem {

    id: number ;
    task: Task;
    creator: string;
    assignee: string;

}
