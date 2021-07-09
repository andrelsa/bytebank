import {Component, Input, OnInit} from '@angular/core';
import {TransferenciaService} from '../servives/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  // @ts-ignore
  transferencias: any[];

  constructor(private service: TransferenciaService) {
  }

  ngOnInit(): void {
    this.transferencias = this.service.getTransferencias;
  }

}
