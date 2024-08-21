import { IIssue } from './IIssue';

export interface IIssueType {
  id: number;
  name?: string;
  title: string;
  color?: string;
  description?: string;
  issues?: IIssue[];
}
