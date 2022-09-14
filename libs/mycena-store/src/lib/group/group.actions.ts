import { Action } from 'mycena-store';

export enum ActionEnum {
  TestGroup = '[Group] Testing Group',
  TestGroupAPI = '[Group] Testing Group API',
  TestGroupAPISuccess = '[Group] Testing Group API Success',
}

export const ActionMap = {
  TestGroup: ActionEnum.TestGroup,
  TestGroupAPISuccess: ActionEnum.TestGroupAPISuccess,
};

export class TestGroup extends Action {
  readonly type = ActionEnum.TestGroup;
  constructor(public payload: { message: string }) {
    super();
  }
}
export class TestGroupAPI extends Action {
  readonly type = ActionEnum.TestGroupAPI;
  constructor() {
    super();
  }
}
export class TestGroupAPISuccess extends Action {
  readonly type = ActionEnum.TestGroupAPISuccess;
  constructor(public payload: { body: any }) {
    super();
  }
}

export type ActionUnion = TestGroup;
