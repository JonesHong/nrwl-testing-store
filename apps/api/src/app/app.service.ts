import { Injectable } from '@nestjs/common';
import { Message } from '@testing-mycena-store/api-interfaces';

import { Store } from "../../../../libs/mycena-store/src/lib/mycena-store.unittest"

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
  constructor() {
    console.log(Store.state)
  }
}
