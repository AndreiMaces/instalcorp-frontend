import { IProject } from './IProject';
import { IEmployee } from './IEmployee';
import { EStatus } from '../../dashboard/project-types/shared/enums/EStatus';

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
  status?: EStatus;
  createdAt?: Date;
  editedAt?: Date;
}
