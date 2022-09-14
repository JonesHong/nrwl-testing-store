import { GroupEntity } from "./group.entity";
import { GroupReducer } from "./group.reducer";

export const _propsGroup1 = { id: "group-1", name: "Mycena", cooperationId: ["group-2", "group-3"] };
export const group1 = new GroupEntity(_propsGroup1);
export const _propsGroup2 = { id: "group-2", name: "TaiwanTimes", cooperationId: ["group-1"] };
export const group2 = new GroupEntity(_propsGroup2);
export let _propsGroup3 = { id: "group-3", name: "TaiwanPower", cooperationId: ["group-1"] };
export const group3 = new GroupEntity(_propsGroup3);
export const _propsGroup4 = { id: "group-4", name: "Well-pay", cooperationId: ["group-1"] };
// export const group4 = new GroupEntity(_propsGroup4);
export const _propsGroup5 = { id: "group-5", name: "Youtube", cooperationId: [] };
// export const group5 = new GroupEntity(_propsGroup5);
export const _propsGroup6 = { id: "group-6", name: "Facebook", cooperationId: [] };
// export const group6 = new GroupEntity(_propsGroup6);



export const groupReducer = new GroupReducer();