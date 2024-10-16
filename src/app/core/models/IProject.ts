import { IProjectType } from "./IProjectType";
import { EProjectImportance } from "../../dashboard/project-types/shared/enums/EProjectImportance";
import { ITask } from "./ITask";
import { EStatus } from "../../dashboard/project-types/shared/enums/EStatus";

export interface IProject {
  id: number;
  title: string;
  description?: string;
  color?: string;
  startHour?: Date;
  endHour?: Date;
  startDate?: Date;
  endDate?: Date;
  status: EStatus;
  type?: IProjectType;
  typeId?: number;
  importance: EProjectImportance;
  tasks?: ITask[];
  media: string[];
  isDeleted: boolean;
  createdAt?: Date;
  editedAt?: Date;
}
