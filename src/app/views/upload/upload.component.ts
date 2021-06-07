import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  selectedFile!: File;
  imageSrc: string | undefined;
  @Output() onSelectedFile = new EventEmitter<File>();

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
  }

  onUpload() {
    this.onSelectedFile.emit(this.selectedFile);
  }
}
