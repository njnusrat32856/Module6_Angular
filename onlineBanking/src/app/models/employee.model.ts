import { Branch } from "./sharedPartModel/branch.model";
import { Department } from "./sharedPartModel/department.model";

export interface Employee {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string; // E.g., "Manager", "Support", "Loan Officer"
    branch: Branch; // Reference to the Branch model
    department: Department; // Reference to the Department model
    active: boolean; // Indicates if the employee is active
    notifications: Notification[]; // List of notifications related to the employee
  }