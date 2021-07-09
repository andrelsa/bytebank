import {Component} from '@angular/core';
import {TransferenciaService} from './servives/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService) {
  }

  // tslint:disable-next-line:typedef
  transferir($event: any) {
    this.service.adicionar($event);
  }
}
