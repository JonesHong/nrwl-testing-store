import { createEffect, ofType } from "@mycena/store/common/effect";
import { from } from "rxjs";
import { map, mergeMap } from 'rxjs/operators';
import { Actions } from "../mycena-store.unittest";
import { ActionEnum, TestUserAPISuccess } from "./user.actions";
import { ErrorResponse } from "@mycena/store/common/action";
import { injectable } from "inversify";
import { UserService } from "./user.service";

@injectable()
export class UserEffects {
    constructor(private _groupService: UserService) { }

    test$ = createEffect(() => Actions.pipe(
        ofType(ActionEnum.TestUserAPI),
        mergeMap((event: any) => {
            return from(this._groupService.getAPITest()).pipe(
                map((res: any) => {
                    if (200 <= res.statusCode && res.statusCode <= 299) {
                        return new TestUserAPISuccess({
                            body: res.body
                        })
                    } else {
                        return new ErrorResponse({
                            "failedAction": event,
                            "error": res['error']
                        })
                    }
                })
            )
        }),
    ), { dispatch: true })

}
