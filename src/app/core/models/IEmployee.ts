import { ITask } from './ITask';

export interface IEmployee {
  id?: number;
  firstName: string;
  lastName: string;
  phone?: string;
  tasks?: ITask[];
  createdAt?: Date;
  editedAt?: Date;
}
