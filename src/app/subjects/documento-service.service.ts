import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoServiceService {

  private dadosDocumento: Subject<any> = new BehaviorSubject<any>([]);
  observableDadosDocumentos = this.dadosDocumento.asObservable();

  setDadosDocumentos(data: any) {
    this.dadosDocumento.next(data);
  }

}
