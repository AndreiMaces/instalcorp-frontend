import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";
import { EProjectImportance } from "../../../shared/enums/EProjectImportance";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-issue-importance',
  standalone: true,
  imports: [
    NgIf,
    MatTooltip
  ],
  templateUrl: './issue-importance.component.html',
  styleUrl: './issue-importance.component.scss'
})
export class IssueImportanceComponent {
  @Input() importance: number;


  protected readonly EProjectImportance = EProjectImportance;
}
