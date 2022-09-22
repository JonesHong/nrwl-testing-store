import { Entity } from "@mycena/store/common/entity";
import { Employee } from "./employee.models";

export class EmployeeEntity extends Entity {
    _name = "EmployeeEntity"
    constructor(property: Employee) {
        super(property);
    }
}