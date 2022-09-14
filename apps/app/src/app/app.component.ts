import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@testing-store/api-interfaces';
import { Observable } from "rxjs";
import { Store } from "../../../../libs/mycena-store/src/lib/mycena-store.unittest";

@Component({
  selector: 'testing-mycena-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {

    console.log(Store)
  }

}
