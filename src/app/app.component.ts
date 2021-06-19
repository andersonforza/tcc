import { WebcamImage } from 'ngx-webcam';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result: any = {};
  constructor(private readonly http: HttpClient) {}

  public webcamImage: WebcamImage | undefined;
  imageSrc: string = '';

  webcamImageShot(webcamImage: WebcamImage) {
    this.imageSrc = '';
    this.webcamImage = webcamImage;
  }

  uploadShot(imageSrc: string){
    this.webcamImage = undefined;
    this.imageSrc = imageSrc;
  }

  onUpload(file: File) {
    this.webcamImage = undefined;
    const fd = new FormData();
    fd.append('teste', file);
    this.http.post<any>('http://localhost:3000/detectarEpis', fd).subscribe({
      next: (res) => {
        this.result = res;
      },
    });
  }

  handleImage(file: WebcamImage) {
    this.imageSrc = '';
    var imageAsFile = new File([file.imageAsDataUrl], 'teste.jpeg', {
      type: 'image/jpeg'
    });
    const fd = new FormData();
    fd.append('teste', imageAsFile);
    this.http.post<any>('http://localhost:3000/detectarEpis', fd).subscribe({
      next: (res) => {
        this.result = res;
      },
    });
  }
}
