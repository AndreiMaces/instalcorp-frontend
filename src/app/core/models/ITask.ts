import { IProject } from './IProject';
import { IEmployee } from './IEmployee';

export interface ITask {
  id?: number;
  employeeId: number;
  projectId: number;
  project?: IProject;
  employee?: IEmployee;
  startDate: Date;
  endDate: Date;
  order: number;
  title: string;
  color: string;
}
