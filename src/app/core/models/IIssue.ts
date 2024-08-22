import { IIssueType } from './IIssueType';
import { EProjectImportance } from '../../dashboard/project-types/shared/enums/EProjectImportance';

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
  isDeleted: boolean;
}

/*
*  id Int @id @default(autoincrement())
  name String
  title String
  description String?
  color String?
  startHour DateTime? @db.Time()
  endHour DateTime? @db.Time()
  startDate DateTime?
  endDate DateTime?
  status Int
  type IssueType @relation(fields: [typeId], references: [id])
  typeId Int
  isDeleted Boolean @default(false)
* */
