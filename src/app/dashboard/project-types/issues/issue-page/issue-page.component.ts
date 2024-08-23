import { Component, OnInit } from "@angular/core";
import { BradcrumbsMenuComponent } from '../../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeComponent } from '../../project-type/project-type.component';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { IssueControllerService } from "../../../../core/api/controllers/issue-controller.service";
import { IIssue } from "../../../../core/models/IIssue";
import { CdkDrag, CdkDropList } from "@angular/cdk/drag-drop";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { ProjectTypeIssueComponent } from "../../project-type-page/project-type-issue/project-type-issue.component";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [BradcrumbsMenuComponent, MatAnchor, MatButton, MatIcon, MatProgressSpinner, NgForOf, NgIf, ProjectTypeComponent, RouterLink, CdkDrag, CdkDropList, MatFormField, MatLabel, MatOption, MatSelect, ProjectTypeIssueComponent, ReactiveFormsModule],
  templateUrl: './issue-page.component.html',
  styleUrl: './issue-page.component.scss',
})
export class IssuePageComponent implements OnInit {

  issue: IIssue;
  isLoading: boolean;
  constructor(
    private issueControllerService: IssueControllerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initIssue();
  }

  initIssue() {
    this.isLoading = true;
    const issueId = this.route.snapshot.params['issueId'];
    this.issueControllerService.getIssue(issueId).subscribe(issue => {
      this.issue = issue;
      this.isLoading = false
    }, (error) => {
      console.error(error);
      this.isLoading = false;
    })
  }

}
