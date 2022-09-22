
import { createEffect, ofType } from "@mycena/store/common/effect";
import { map } from "rxjs";
import { Actions } from "../mycena-store.unittest";
import { ActionMap } from "./employee.actions";
import { Injectable } from "@angular/core";


@Injectable()
export class EmployeeFrontendEffects {
    constructor() { }

    test$ = createEffect(() => Actions.pipe(
        ofType(ActionMap.TestEmployee),
        map(event => {

        })
    ), { dispatch: false })

}