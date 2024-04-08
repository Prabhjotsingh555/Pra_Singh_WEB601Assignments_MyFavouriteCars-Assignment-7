import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { carserviceService } from '../car-service.service';

@Component({
  selector: 'app-new-dialog',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './new-dialog.component.html',
  styleUrl: './new-dialog.component.scss',
})
export class NewDialogComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: '',
    type: '',
    imgURL: '',
    tags: [] as string[],
  };
  tagsString: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(
    private natureService: carserviceService,
    public dialogRef: MatDialogRef<NewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.newContent.tags = this.tagsString.split(',');

    this.natureService
      .addContent(this.newContent)
      .subscribe((newContentWithId: Content | undefined) => {
        this.contentAdded.emit(newContentWithId);
      });
    this.dialogRef.close();
    this.clearFields();
  }

  clearFields() {
    this.newContent = {
      id: null,
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: [],
    };
    this.tagsString = '';
  }
}
