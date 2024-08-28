import { Component, Input } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgForOf, NgIf } from '@angular/common';
import { FormArray, FormControl } from '@angular/forms';
import { FileControllerService } from '../../../core/api/controllers/file-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-upload-media-multiple',
  standalone: true,
  imports: [MatButton, NgIf, NgForOf, MatIconButton, MatIcon, MatProgressSpinner],
  templateUrl: './upload-media-multiple.component.html',
  styleUrl: './upload-media-multiple.component.scss',
})
export class UploadMediaMultipleComponent {
  @Input() _formArray: FormArray<FormControl<string>>;
  isLoading = false;

  constructor(
    private fileController: FileControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    Array.prototype.forEach.call(target.files, (file) => this.uploadFile(file));
  }

  uploadFile(file: File): void {
    this.isLoading = true;
    this.fileController.uploadFile(file).subscribe({
      next: (res) => {
        this._formArray.push(new FormControl(res.url));
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('Eroare la incarcarea fisierului.', 'Close', {
          duration: 3000,
        });
        this.isLoading = false;
      },
    });
  }
}
