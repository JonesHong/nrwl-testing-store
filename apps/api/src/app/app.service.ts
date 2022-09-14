import { Injectable } from '@nestjs/common';
import { Message } from '@testing-store/api-interfaces';
import {Store} from '@testing-store/mycena-store'
// import { Store } from "../../../../libs/mycena-store/src/lib/mycena-store.unittest"

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
  constructor() {
    console.log(Store.state)
  }
}
