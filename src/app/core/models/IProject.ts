import { IProjectType } from './IProjectType';
import { EProjectImportance } from '../../dashboard/project-types/shared/enums/EProjectImportance';
import { IEmployeeProject } from './IEmployeeProject';

export interface IProject {
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
  type?: IProjectType;
  typeId?: number;
  importance: EProjectImportance;
  employeeProjects?: IEmployeeProject[];
  media: string[];
  isDeleted: boolean;
}
