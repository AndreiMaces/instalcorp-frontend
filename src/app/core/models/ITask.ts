import { IProject } from './IProject';
import { IEmployee } from './IEmployee';

export interface ITask {
  id?: number;
  employeeId: number;
  projectId: number;
  description: string;
  project?: IProject;
  employee?: IEmployee;
  startDate: Date;
  endDate: Date;
  order: number;
  title: string;
  color: string;
  style?: any;
  createdAt?: Date;
  editedAt?: Date;
}
