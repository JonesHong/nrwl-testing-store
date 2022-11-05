import { UserEntity } from "./user.entity";
import { UserReducer } from "./user.reducer";

export const _propsUser1 = { id: "group-1", name: "Mycena", cooperationId: ["group-2", "group-3"] };
export const group1 = new UserEntity(_propsUser1);
export const _propsUser2 = { id: "group-2", name: "TaiwanTimes", cooperationId: ["group-1"] };
export const group2 = new UserEntity(_propsUser2);
export let _propsUser3 = { id: "group-3", name: "TaiwanPower", cooperationId: ["group-1"] };
export const group3 = new UserEntity(_propsUser3);
export const _propsUser4 = { id: "group-4", name: "Well-pay", cooperationId: ["group-1"] };
// export const group4 = new UserEntity(_propsUser4);
export const _propsUser5 = { id: "group-5", name: "Youtube", cooperationId: [] };
// export const group5 = new UserEntity(_propsUser5);
export const _propsUser6 = { id: "group-6", name: "Facebook", cooperationId: [] };
// export const group6 = new UserEntity(_propsUser6);



export const groupReducer = new UserReducer();