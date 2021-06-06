import { WebcamImage } from 'ngx-webcam';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
  url: string = '';
  result: any = {};
  constructor(private readonly http: HttpClient) {}

  public webcamImage: WebcamImage | undefined;

  handleImageShot(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  onUpload(file: File) {
    const fd = new FormData();
    console.log(file);
    fd.append('teste', file);
    this.http.post<any>('http://localhost:3000/detectarEpis', fd).subscribe({
      next: (res) => {
        this.result = res;
        console.log(this.result);
      },
    });
  }

  handleImage(file: WebcamImage) {
    const fd = new FormData();
    console.log(file);
    fd.append('teste', file.imageAsBase64);
    this.http.post<any>('http://localhost:3000/detectarEpis', fd).subscribe({
      next: (res) => {
        this.result = res;
        console.log(this.result);
      },
    });
  }
}
