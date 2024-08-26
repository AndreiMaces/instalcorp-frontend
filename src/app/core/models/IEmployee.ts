import { IEmployeeIssue } from './IEmployeeIssue';

export interface IEmployee {
  id?: number;
  firstName: string;
  lastName: string;
  phone?: string;
  employeeIssues?: IEmployeeIssue[];
}
