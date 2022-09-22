import { createEntityAdapter, EntityAdapter, EntityState } from "@mycena/store/common/adapter";
import { Action } from "@mycena/store/common/action";
import { Reducer } from "@mycena/store/common/reducer";
import { ActionMap } from "./employee.actions";
import { Employee } from "./employee.models";
import { EmployeeEntity } from "./employee.entity";


export const FeatureKey = 'employee';

export interface EmployeeState extends EntityState<Employee> {
}

export const adapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();

export const initialState: EmployeeState = adapter.getInitialState({
});

export class EmployeeReducer extends Reducer<Action, EmployeeState>{
    _name = "EmployeeReducer";
    constructor() {
        super(initialState, ActionMap);
        this.setEntity(EmployeeEntity);
    }
    async* mapEventToState(event: any): AsyncIterableIterator<any> {
        let newState = await this.defaultActionState(event);
        // console.log(event['type'])
        switch (event['type']) {
            case ActionMap.TestEmployee: {
                console.log("8320820381")
                yield await this.state;
                break;
            }
            default: {
                yield await newState;
                break;
            }
        }
    }

}

export const reducer = new EmployeeReducer();