// import { IEntityRelationConfig, RelationshipByType } from "@mycena/store/interface/relation.interface";


// export interface CommonStoreState {
//     anomaly: fromAnomaly.AnomalyState;
// }
// export const CommonReducers = {
//     anomaly: fromAnomaly.reducer,
// };
// export const CommonFeatureKeys = {
//     anomaly: fromAnomaly.FeatureKey,
// };

// export const CommonRelationshipByType: RelationshipByType = {
//     "OneToOne": new Set([

//     ]),
//     "OneToMany": new Set([
//         "Camera{anomalyMap(cameraId)} to Anomaly{camera(id)}",
//         "Camera{incidentRecordMap(cameraId)} to IncidentRecord{camera(id)}",
//         "ConstructionLocation{anomalyMap(locationId)} to Anomaly{constructionLocation(id)}",
//         "ConstructionLocation{cameraMap(locationId)} to Camera{constructionLocation(id)}",
//         "ConstructionLocation{incidentRecordMap(locationId)} to IncidentRecord{constructionLocation(id)}",
//         "Anomaly{incidentRecordMap(anomalyId)} to IncidentRecord{anomaly(id)}",
//         // "User{accountMap(userId)} to Account{user(id)}",
//         // "User{contactMap(userId)} to Contact{user(id)}",
//         "User{contactMap(userId)} to AccountContact{user(id)}",
//         "User{notificationMap(userId)} to Notification{user(id)}",
//     ]),
//     "ManyToOne": new Set([
//         "Anomaly{constructionLocation(id)} to ConstructionLocation{anomalyMap(locationId)}",
//         "Anomaly{camera(id)} to Camera{anomalyMap(cameraId)}",
//         "AccountContact{user(id)} to User{contactMap(userId)}",
//         "Camera{constructionLocation(id)} to ConstructionLocation{cameraMap(locationId)}",
//         "IncidentRecord{anomaly(id)} to Anomaly{incidentRecordMap(anomalyId)}",
//         "IncidentRecord{constructionLocation(id)} to ConstructionLocation{incidentRecordMap(locationId)}",
//         "IncidentRecord{camera(id)} to Camera{incidentRecordMap(cameraId)}",
//         // "Account{user(id)} to User{accountMap(userId)}",
//         // "Contact{user(id)} to User{contactMap(userId)}",
//         "Notification{user(id)} to User{notificationMap(userId)}",
//     ]),
//     "ManyToMany": new Set([]),
// }
// export const CommonRelationConfig: IEntityRelationConfig = {

// };
