
import { injectable } from 'inversify';
import { of } from "rxjs";
// import supertest from 'supertest';
// import { } from ""


@injectable()
export class GroupService {
    // request: supertest.SuperTest<supertest.Test>
    constructor() {
        // this.request = supertest("https://httpbin.org");
    }

    getAPITest() {
        // return this.request.get('/get');
        return of({ statusCode: 200, body: [1, 2, 3, 4] })
    }
}