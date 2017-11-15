import { Task } from 'app/todos/model/task';

export interface TodoItem {

    _id: number ;
    task: Task;
    creator: string;
    assignee: string;

}
