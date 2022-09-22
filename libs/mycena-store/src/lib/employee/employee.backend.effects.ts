import { createEffect, ofType } from "@mycena/store";
import { map } from "rxjs";
import { Actions } from "../mycena-store.unittest";
import { ActionMap } from "./employee.actions";
import { Injectable } from "@nestjs/common";


@Injectable()
export class EmployeeBackendEffects {
    constructor() { }

    test$ = createEffect(() => Actions.pipe(
        ofType(ActionMap.TestEmployee),
        map(event => {

        })
    ), { dispatch: false })

}