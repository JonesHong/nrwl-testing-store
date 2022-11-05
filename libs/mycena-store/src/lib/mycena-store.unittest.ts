import { AddMany, AddOne, CqrsMain, Relation, RemoveMany, SetMany } from '@mycena/store';
import { RelationshipByType } from '@mycena/store/common/interface/relation.interface';
import * as fromGroup from './group/group.reducer';
import * as fromEmployee from './employee/employee.reducer';
import * as fromUser from './user/user.reducer';
import { GroupEffects } from './group/group.effects';
import { TestGroupAPI } from './group/group.actions';
import { GroupService } from './group/group.service';
import { Logger } from '@mycena/store/common/logger';
import { BehaviorSubject } from 'rxjs';

export interface StoreState {
  group: fromGroup.GroupState;
  employee: fromEmployee.EmployeeState;
  user: fromUser.UserState;
}
export const Reducers = {
  group: fromGroup.reducer,
  employee: fromEmployee.reducer,
  user: fromUser.reducer
};
export const FeatureKeys = {
  group: fromGroup.FeatureKey,
  employee: fromEmployee.FeatureKey,
  user: fromUser.FeatureKey
};
export const Effects = [GroupEffects];

export const RelationshipByTypeMap: RelationshipByType = {
  OneToOne: new Set([]),
  OneToMany: new Set([
    "Group{employeeMap(group)} to Employee{Group(id)}",
    "Group{testEmployeeMap(testGroup)} to Employee{groupTest(id)}",
    "Group{test2EmployeeMap(testGroup2)} to Employee{groupTest2(id)}",
    "Group{test3EmployeeMap(testGroup3)} to Employee{groupTest3(id)}",
    "User{u1employeeMap(user)} to Employee{user(id)}",
    "User{u2employeeMap(u2)} to Employee{user2(id)}",
    "User{u3employeeMap(u3)} to Employee{user3(id)}",
  ]),
  ManyToOne: new Set([
    "Employee{Group(id)} to Group{employeeMap(group)}",
    "Employee{groupTest(id)} to Group{testEmployeeMap(testGroup)}",
    "Employee{groupTest2(id)} to Group{test2EmployeeMap(testGroup2)}",
    "Employee{groupTest3(id)} to Group{test3EmployeeMap(testGroup3)}",
    "Employee{user(id)} to User{u1employeeMap(user)}",
    "Employee{user2(id)} to User{u2employeeMap(u2)}",
    "Employee{user3(id)} to User{u3employeeMap(u3)}",
  ]),
  ManyToMany: new Set([
    // 'Group{cooperationId} to Group{group(id)}'
  ]),
};
export const Cqrs = new CqrsMain<StoreState, typeof Reducers>();
Cqrs.setAppModuleType('unit-test');
Cqrs.forRootReducers(Reducers);
Cqrs.setProviders([GroupService]);
export const Store = Cqrs.Store;
export const StoreSate: any = Cqrs.StoreSate;
export const Actions: any = Cqrs.Actions;
Cqrs.forRootEffects(Effects);
Cqrs.setRelationshipByType(RelationshipByTypeMap);

Cqrs.setRelationConfig(Relation.getInstance().fromJDL(Cqrs.relationshipByType));
export const StoreWithRelation: BehaviorSubject<StoreState> = Cqrs.StoreWithRelation;

Store.dispatch(new AddOne('group', { id: 'g-1', name: 'Mycena' }));
Store.dispatch(
  new AddMany('group', [
    { id: 'g-2', name: 'Tymetro' },
    { id: 'g-3', name: 'TaiwanPower' },
  ])
);

setTimeout(() => {
  Store.dispatch(new AddMany('employee', [{ id: 'e-1', name: 'Eric' }]));
  Store.dispatch(new SetMany('employee', [{ id: 'e-1', name: 'Eric', group: {id: 'g-1', name: 'Mycena'}, testGroup: {id: 'g-2', name: 'Tymetro'}, testGroup2: {id: 'g-1', name: 'Mycena'}, testGroup3: {id: 'g-2', name: 'Tymetro'} }]));
  Store.dispatch(new SetMany('employee', [{ id: 'e-2', name: 'Eugene', user: {id: 'u-1'}, u2: {id: 'u-2'}, group: {id: 'g-1', name: 'Mycena'}, testGroup: {id: 'g-2', name: 'Tymetro'}, testGroup2: {id: 'g-1', name: 'Mycena'}, testGroup3: {id: 'g-2', name: 'Tymetro'}, u3: {id: 'u-1'}}]));
  // Store.dispatch(new SetMany('employee', [{ id: 'e-1', name: 'Eric', group: {id: 'g-2', name: 'Tymetro'} }]));
  // Store.dispatch(new RemoveMany('group', ['g-1']))

  Store.dispatch(new AddMany('user', [{ id: 'u-1', name: 'uu'}, { id: 'u-2', name: 'u2'}]))
  Store.dispatch(new TestGroupAPI());
  Logger.log('Dev', '222 Store.topicMap', { payload: Store.topicMap });
  Logger.log('Dev', '222 Store.topicNameList', { payload: Store.topicNameList });
}, 6000);
Logger.log('Dev', '111 Store.topicMap', { payload: Store.topicMap });
Logger.log('Dev', '111 Store.topicNameList', { payload: Store.topicNameList });
// "OneToOne": new Set([
//     "Spouse{spouse(spouseId)} to Spouse{spouse(spouseId)}",
// ]),
// "OneToMany": new Set([
//     "Teacher{studentMap(teacherId)} to Student{teacher(id)}",
// ]),
// "ManyToOne": new Set([
//     "Student{teacher(id)} to Teacher{studentMap(teacherId)}",
// ]),
