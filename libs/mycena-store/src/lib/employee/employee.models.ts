import { Group } from "../group/group.models";

export interface Employee {
    id: string;
    name: string;
    group?: Group;
    testGroup?: Group;
}
