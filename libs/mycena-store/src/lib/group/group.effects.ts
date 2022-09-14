import { createEffect, ofType } from "mycena-store";
import { from } from "rxjs";
import { map, mergeMap } from 'rxjs/operators';
import { Actions } from "../mycena-store.unittest";
import { ActionEnum, TestGroupAPISuccess } from "./group.actions";
import { ErrorResponse } from "mycena-store";
import { injectable } from "inversify";
import { GroupService } from "./group.service";

@injectable()
export class GroupEffects {
    constructor(private _groupService: GroupService) { }

    test$ = createEffect(() => Actions.pipe(
        ofType(ActionEnum.TestGroupAPI),
        mergeMap((event: any) => {
            return from(this._groupService.getAPITest()).pipe(
                map((res: any) => {
                    if (200 <= res.statusCode && res.statusCode <= 299) {
                        return new TestGroupAPISuccess({
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
