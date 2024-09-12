import { IProject } from './IProject';
import { IEmployee } from './IEmployee';

export interface IEmployeeProject {
  employeeProject: IEmployeeProject;
  id?: number;
  employeeId: number;
  projectId: number;
  project?: IProject;
  employee?: IEmployee;
  startDate: Date;
  endDate: Date;
  order: number;
}
