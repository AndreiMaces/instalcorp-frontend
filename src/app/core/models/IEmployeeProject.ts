import { IProject } from './IProject';
import { IEmployee } from './IEmployee';

export interface IEmployeeProject {
  id?: number;
  employeeId: number;
  projectId: number;
  project?: IProject;
  employee?: IEmployee;
  startDate: string;
  endDate: string;
}
