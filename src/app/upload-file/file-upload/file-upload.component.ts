import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  files: Set<File> = new Set();

  constructor(private service: UploadService) {}

  ngOnInit(): void {}

  onChange(event: any) {
    const selectedFiles = <FileList>event.srcElement.files;

    const filesName = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      filesName.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }

    document.getElementById('customFileLabel')!.innerHTML =
      filesName.join(', ');
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service
        .upload(this.files, 'http... informar a rota aqui')
        .subscribe((response) => console.log('Upload Concluído'));
    }
  }
}
