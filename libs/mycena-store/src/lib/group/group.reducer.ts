import { EntityState, EntityAdapter, createEntityAdapter } from "@mycena/store/common/adapter";
import { Reducer } from "@mycena/store/common/reducer";
import { Action } from "@mycena/store/common/action";
import { ActionMap } from "./group.actions";
import { GroupEntity } from "./group.entity";
import { Group } from "./group.models";
import { Logger } from "@mycena/store/common/logger";

export const FeatureKey = 'group';

export interface GroupState extends EntityState<Group> {
    message: string;
    apiBody: any;
}

export const adapter: EntityAdapter<Group> = createEntityAdapter<Group>();

export const initialState: GroupState = adapter.getInitialState({
    message: null,
    apiBody: null,
});

export class GroupReducer extends Reducer<Action, GroupState>{
    _name = "GroupReducer";

    constructor() {
        super(initialState, ActionMap);
        this.setEntity(GroupEntity);
    }

    async* mapEventToState(event: Action): AsyncIterableIterator<GroupState> {
        let newState = this.defaultActionState(event);
        switch (event['type']) {
            case ActionMap.TestGroup: {
                yield await this.handelTestGroup(newState, event);
            }
            case ActionMap.TestGroupAPISuccess: {
                yield await this.handelTestGroupAPISuccess(newState, event);
            }
            default: {
                yield await newState;
            }
        }
    }
    private handelTestGroup(newState: any, event: any): GroupState {
        newState['message'] = event['payload']['message'];
        return newState;
    }
    private handelTestGroupAPISuccess(newState, event): GroupState {
        newState['apiBody'] = event['payload']['body'];
        Logger.log(this._name, `apiBody: ${newState['apiBody']}`)
        return newState
    }
}

export const reducer = new GroupReducer();