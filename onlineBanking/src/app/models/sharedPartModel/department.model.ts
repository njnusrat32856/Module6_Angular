import { Employee } from "../employee.model";
import { Branch } from "./branch.model";

export interface Department {
    id: number;
    departmentName: string; // E.g., "Human Resources", "Finance"
    branch: Branch; // The branch to which the department belongs
    employees: Employee[]; // List of employees in this department
  }