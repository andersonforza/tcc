import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  selectedFile!: File;
  selectedImage!: ImageData;
  url: string = '';
  @Output() onSelectedFile = new EventEmitter<File>();

  public handleUploadShot(imagem: ImageData) {
    console.info('received webcam image', imagem);
    this.selectedImage = imagem;
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    this.onSelectedFile.emit(this.selectedFile);
  }
}
