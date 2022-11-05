import { EntityState, EntityAdapter, createEntityAdapter } from "@mycena/store/common/adapter";
import { Reducer } from "@mycena/store/common/reducer";
import { Action } from "@mycena/store/common/action";
import { ActionMap } from "./user.actions";
import { UserEntity } from "./user.entity";
import { User } from "./user.models";
import { Logger } from "@mycena/store/common/logger";

export const FeatureKey = 'user';

export interface UserState extends EntityState<User> {
    message: string;
    apiBody: any;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UserState = adapter.getInitialState({
    message: null,
    apiBody: null,
});

export class UserReducer extends Reducer<Action, UserState>{
    _name = "UserReducer";

    constructor() {
        super(initialState, ActionMap);
        this.setEntity(UserEntity);
    }

    async* mapEventToState(event: Action): AsyncIterableIterator<UserState> {
        let newState = this.defaultActionState(event);
        switch (event['type']) {
            case ActionMap.TestUser: {
                yield await this.handelTestUser(newState, event);
            }
            case ActionMap.TestUserAPISuccess: {
                yield await this.handelTestUserAPISuccess(newState, event);
            }
            default: {
                yield await newState;
            }
        }
    }
    private handelTestUser(newState: any, event: any): UserState {
        newState['message'] = event['payload']['message'];
        return newState;
    }
    private handelTestUserAPISuccess(newState, event): UserState {
        newState['apiBody'] = event['payload']['body'];
        Logger.log(this._name, `apiBody: ${newState['apiBody']}`)
        return newState
    }
}

export const reducer = new UserReducer();