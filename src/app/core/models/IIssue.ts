import { IIssueType } from './IIssueType';
import { EProjectImportance } from '../../dashboard/project-types/shared/enums/EProjectImportance';
import { IEmployeeIssue } from './IEmployeeIssue';

export interface IIssue {
  id: number;
  name: string;
  title: string;
  description?: string;
  color?: string;
  startHour?: Date;
  endHour?: Date;
  startDate?: Date;
  endDate?: Date;
  status: number;
  type?: IIssueType;
  typeId?: number;
  importance: EProjectImportance;
  employeeIssues?: IEmployeeIssue[];
  media: string[];
  isDeleted: boolean;
}
