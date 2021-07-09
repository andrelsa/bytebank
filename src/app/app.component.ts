import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  // tslint:disable-next-line:typedef
  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
  }
}
