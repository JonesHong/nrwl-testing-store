// import { CqrsMain, Relation, RelationManager } from "@mycena/store";
// import { CommonFeatureKeys, CommonReducers, CommonRelationConfig, CommonRelationshipByType, CommonStoreState } from "./mycena-store";

// import { AnomalyFrontendEffects } from "./anomaly/anomaly.frontend.effects";




// interface StoreState extends CommonStoreState { }
// const reducers = {
//   ...CommonReducers,
// }
// export const effects = [
//   AnomalyFrontendEffects,
// ]

// const relationConfig = {
//   ...CommonRelationConfig
// }
// const relationshipByType = {
//   ...CommonRelationshipByType
// }
// const featureKeys = {
//   ...CommonFeatureKeys
// }
// export const Cqrs = new CqrsMain<StoreState, typeof reducers>();
// Cqrs.forRootReducers(reducers);
// export const Store = Cqrs.Store;
// export const Actions:any = Cqrs.Actions;
// Cqrs.forRootEffects(effects);
// Cqrs.setRelationshipByType(relationshipByType);
// Cqrs.setRelationConfig(Relation.getInstance().fromJDL(Cqrs.relationshipByType));
// export const StoreWithRelation:any = Cqrs.StoreWithRelation;
// // asapScheduler.schedule(() => {
// // StoreWithRelation = Cqrs.StoreWithRelation
// // console.log(Cqrs.StoreWithRelation)
// // }, 2000)
// // console.log(3333, Store)

// // StoreWithRelation.subscribe(res => {
// //     console.log('xxx3', res)
// // })
// setTimeout(() => {
//   // console.log(Cqrs.isEffectLoaded$.value)
//   // Store.dispatch(new TestAnomaly({ "message": "hello1111" }))

//   // Store.dispatch(new TestAnomaly({ "message": "hello2222" }))
// }, 3000);

// // const OneToMany = [
// //     // SQL: JOIN Employee employee with user.id = employee.userId
// //     "User{employee(userId)} to Employee{user(id)}",
// //     "User{playAs(userId)} to Employee{belongTo(id)}",
// // ]
// // const ManyToOne = [
// //     // SQL: JOIN Employee employee with user.id = employee.userId
// //     "Employee{user(id)} to User{employee(userId)}",
// // ]

// // Store.dispatch(new AddOne(featureKeys.constructionLocation, {
// //     id: "constructionLocation-1",
// //     name: "案場001",
// //     createDateTime: DateTime.fromJSDate(new Date).valueOf(),
// //     updateDateTime: DateTime.fromJSDate(new Date).valueOf(),
// // }))

