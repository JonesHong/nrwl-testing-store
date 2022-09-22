import { Action, transferActionMapToActionList } from "@mycena/store/common/action"
import { Employee } from "./employee.models"

export const ActionMap = {
    TestEmployee: '[Employee] Testing Employee',
}

export class TestEmployee extends Action {
    readonly type: string = ActionMap.TestEmployee
    constructor(public payload: { message: string }) {
        super();
    }
}



export type ActionUnion = TestEmployee
