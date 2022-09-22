import { Employee } from "../employee/employee.models";

export interface Group {
    id: string;
    name: string;
    cooperationId?: string[];
    description?: string;
    tel: string;
    address: string;
    employees?: Employee[];
    owner?: Employee;
}