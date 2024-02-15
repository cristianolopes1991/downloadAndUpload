import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DocumentoServiceService } from '../documento-service.service';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent implements OnInit, OnDestroy {
  dadosIds: { idDocumento: number }[] = [];
  documentoObservable: Subscription = new Subscription();

  constructor(private documentoService: DocumentoServiceService) {}

  ngOnInit(): void {
    this.getDocumentoService();
  }

  ngOnDestroy(): void {
    if (this.documentoObservable) {
      this.documentoObservable.unsubscribe();
    }
  }

  getDocumentoService(): void {
    this.documentoService.observableDadosDocumentos.subscribe((observer) => {
      this.dadosIds = observer;
    });
  }

  onSegundo(): void {
    const idDocumento = {idDocumento: 1}
    this.dadosIds.splice(1, 1);
    this.documentoService.setDadosDocumentos([...this.dadosIds]);
    console.log('onSegundo', this.dadosIds);
  }
}
