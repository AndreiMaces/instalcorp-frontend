import { Component, OnInit } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { MatAnchor, MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ProjectTypeComponent } from '../../project-type/project-type.component';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { IssueControllerService } from '../../../../core/api/controllers/issue-controller.service';
import { IIssue } from '../../../../core/models/IIssue';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { ProjectTypeIssueComponent } from '../../project-type-page/project-type-issue/project-type-issue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueImportanceComponent } from '../../project-type-page/project-type-issue/issue-importance/issue-importance.component';
import { ColorHelperService } from '../../../../core/helpers/color-helper.service';
import { EmployeesTableComponent } from '../../../../shared/components/employees-table/employees-table.component';
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import {
  ConfirmationDialogComponent,
  IConfirmationDialogData
} from "../../../../shared/components/confirmation-dialog/confirmation-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { EditProjectDialogComponent } from "../../project-type-page/edit-project-dialog/edit-project-dialog.component";
import { HandleEmployeesComponent } from "../../project-type-page/handle-employees-dialog/handle-employees.component";

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [
    BradcrumbsMenuComponent,
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeComponent,
    RouterLink,
    CdkDrag,
    CdkDropList,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ProjectTypeIssueComponent,
    ReactiveFormsModule,
    IssueImportanceComponent,
    DatePipe,
    EmployeesTableComponent,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    CdkMenu,
    CdkMenuItem
  ],
  templateUrl: './issue-page.component.html',
  styleUrl: './issue-page.component.scss',
  host: {
    class: 'flex-grow',
  },
})
export class IssuePageComponent implements OnInit {
  issue: IIssue;
  isLoading: boolean;

  constructor(
    private issueControllerService: IssueControllerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initIssue();
  }

  initIssue() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      const issueId = +params['issueId'];
      this.issueControllerService.getIssue(issueId).subscribe(
        (issue) => {
          this.issue = issue;
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        },
      );
    });

  }

  openDuplicateDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să creați o copie a proiectului '${this.issue.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe(() => {
        this.issueControllerService.cloneIssue(this.issue.id).subscribe((issue) => {
          const redirectRoute = `../../${issue.id}/${issue.title}`;
          this.router.navigate([redirectRoute], { relativeTo: this.route });
        });
      });
  }

  openEditIssueDialog(): void {
    this.dialog
      .open(EditProjectDialogComponent, {
        data: {
          issue: this.issue,
        },
        width: '1200px',
        maxWidth: '100%',
        maxHeight: '80vh',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.initIssue();
        }
      });
  }

  openHandleEmployeesDialog(): void {
    this.dialog.open(HandleEmployeesComponent, {
      data: {
        issue: this.issue,
      },
      disableClose: true,
      maxWidth: '100%',
      maxHeight: '80vh',
      width: '1000px',
    });
  }

  openDeleteIssueDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să ștergeți proiectul '${this.issue.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.issueControllerService.removeIssue(this.issue.id).subscribe(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
          });
        }
      });
  }

  protected readonly ColorHelperService = ColorHelperService;
}
