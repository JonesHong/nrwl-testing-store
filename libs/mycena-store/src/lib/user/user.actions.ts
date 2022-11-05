import { Action } from "@mycena/store/common/action";

export enum ActionEnum {
    TestUser = '[User] Testing User',
    TestUserAPI = '[User] Testing User API',
    TestUserAPISuccess = '[User] Testing User API Success',
}

export const ActionMap = {
    TestUser: ActionEnum.TestUser,
    TestUserAPISuccess: ActionEnum.TestUserAPISuccess,
}

export class TestUser extends Action {
    readonly type = ActionEnum.TestUser
    constructor(public payload: { message: string }) {
        super();
    }
}
export class TestUserAPI extends Action {
    readonly type = ActionEnum.TestUserAPI
    constructor() {
        super();
    }
}
export class TestUserAPISuccess extends Action {
    readonly type = ActionEnum.TestUserAPISuccess
    constructor(public payload: { body: any }) {
        super();
    }
}

export type ActionUnion = TestUser