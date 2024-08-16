import { IIssue } from './IIssue';

export interface IIssueType {
  id: number;
  title: string;
  color?: string;
  description?: string;
  issues?: IIssue[];
}
