import { Component, OnDestroy, OnInit } from '@angular/core';
import { DocumentoServiceService } from '../documento-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit, OnDestroy {

  dadosIds: { idDocumento: number}[] = [];
  dadosSecundarioIds: { idDocumento: number}[] = [{idDocumento: 1}, {idDocumento: 2}, {idDocumento: 3}, {idDocumento: 4}, {idDocumento: 5}, {idDocumento: 6}, {idDocumento: 7}, {idDocumento: 8}, {idDocumento: 9}];
  documentoObservable: Subscription = new Subscription;

  constructor(
    private documentoService: DocumentoServiceService
  ) { }

  ngOnInit(): void {
    this.getDocumentoService();
  }

  ngOnDestroy(): void {
      if(this.documentoObservable) {
        this.documentoObservable.unsubscribe();
      }
  }

  getDocumentoService(): void {
    this.documentoService.observableDadosDocumentos
    .subscribe((observer => {
        this.dadosIds = observer;
      })
    )
  }

  onPrimeiro(): void {
    this.dadosSecundarioIds.forEach((idDoc: any) => {
      const idDocumento = {idDocumento: idDoc};
      this.dadosIds.push({...idDocumento});
      this.documentoService.setDadosDocumentos([...this.dadosIds]);
      console.log('onPrimeiro', this.dadosIds);
    });


    
  }

}
