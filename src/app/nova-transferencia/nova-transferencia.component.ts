import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TransferenciaService} from '../servives/transferencia.service';
import {Transferencia} from '../models/transferencia.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  // @ts-ignore
  valor: number;
  // @ts-ignore
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      error => console.error(error)
    );
  }

  // tslint:disable-next-line:typedef
  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

}
