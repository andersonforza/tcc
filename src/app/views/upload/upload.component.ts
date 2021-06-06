import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFille!: File;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFille = <File>event.target.files[0];
  }

  onUpload () {
    const fd = new FormData();
    fd.append('image', this.selectedFille)
    this.http.post('http://localhost:3000/detectarEpis', fd)
      .subscribe(res => {
        console.log(res);
      });
  }
}
