import { IProject } from './IProject';

export interface IProjectType {
  id: number;
  title: string;
  color?: string;
  description?: string;
  projects?: IProject[];
  createdAt?: Date;
  editedAt?: Date;
}
