import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileControllerService } from '../../../core/api/controllers/file-controller.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-upload-media-single',
  standalone: true,
  imports: [MatButton, NgIf],
  templateUrl: './upload-media-single.component.html',
  styleUrl: './upload-media-single.component.scss',
})
export class UploadMediaSingleComponent implements OnInit {
  @Input() _formControl: FormControl<string> = new FormControl<string>(null);
  isLoading = false;

  constructor(
    private fileController: FileControllerService,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files[0];
    this.uploadFile(file);
  }

  uploadFile(file: File): void {
    this.isLoading = true;
    this.fileController.uploadFile(file).subscribe({
      next: (res) => {
        this._formControl.setValue(res.url);
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
