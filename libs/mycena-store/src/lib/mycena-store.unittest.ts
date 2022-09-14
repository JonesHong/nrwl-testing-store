import { AddMany, AddOne, CqrsMain } from 'mycena-store';
import { RelationshipByType } from 'mycena-store';
import * as fromGroup from './group/group.reducer';
import { GroupEffects } from './group/group.effects';
import { TestGroupAPI } from './group/group.actions';
import { GroupService } from './group/group.service';
import { Logger } from 'mycena-store';

export interface StoreState {
  group: fromGroup.GroupState;
}
export const Reducers = {
  group: fromGroup.reducer,
};
export const FeatureKeys = {
  group: fromGroup.FeatureKey,
};
export const Effects = [GroupEffects];

export const RelationshipByTypeMap: RelationshipByType = {
  OneToOne: new Set([]),
  OneToMany: new Set([]),
  ManyToOne: new Set([]),
  ManyToMany: new Set(['Group{cooperationId} to Group{group(id)}']),
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

Store.dispatch(new AddOne('group', { id: 'g-1', name: 'Mycena' }));
Store.dispatch(
  new AddMany('group', [
    { id: 'g-2', name: 'Tymetro' },
    { id: 'g-3', name: 'TaiwanPower' },
  ])
);

setTimeout(() => {
  console.log(33333890280);
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
