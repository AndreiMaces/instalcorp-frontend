import { IIssue } from './IIssue';
import { IEmployee } from './IEmployee';

export interface IEmployeeIssue {
  id?: number;
  employeeId: number;
  issueId: number;
  issue?: IIssue;
  employee?: IEmployee;
  startDate: Date;
  endDate: Date;
}
