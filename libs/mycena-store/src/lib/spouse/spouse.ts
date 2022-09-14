import { SpouseEntity } from "./spouse.entity";

export const _propsSpouse1 = { id: "spouse-1", name: "Jones", age: 28, spouseId: "spouse-2" };
export const husband1 = new SpouseEntity(_propsSpouse1);

export const _propsSpouse2 = { id: "spouse-2", name: "Chirstine", age: 30, spouseId: "spouse-1" };
export const wife1 = new SpouseEntity(_propsSpouse2);
