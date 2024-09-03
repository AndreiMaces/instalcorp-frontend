import { IEmployeeProject } from './IEmployeeProject';

export interface IEmployee {
  id?: number;
  firstName: string;
  lastName: string;
  phone?: string;
  employeeProjects?: IEmployeeProject[];
}
