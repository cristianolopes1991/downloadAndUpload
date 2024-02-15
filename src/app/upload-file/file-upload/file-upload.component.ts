import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { UploadService } from '../upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DocumentoServiceService } from 'src/app/subjects/documento-service.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  
  files: Set<File> = new Set();
  progress = 0;
  dadosDocumentosIds: {idDocumento: number}[] = [];

  constructor(
    private service: UploadService,
    private documentoService: DocumentoServiceService
  ) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const selectedFiles = <FileList>event.srcElement.files;

    const filesName = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      filesName.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    document.getElementById('customFileLabel')!.innerHTML = filesName.join(', ');
    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service
        .upload(this.files, 'http... informar a rota aqui')
        .subscribe((event: HttpEvent<Object>) => {
          // HttpEventType
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log('Upload Concluído');

          } else if (event.type === HttpEventType.UploadProgress && event.total) {
            const percentDone = Math.round((event.loaded * 100) / event.total);
            console.log('Progresso', percentDone);
            this.progress = percentDone;
          }

        });
    }
  }


  
}
