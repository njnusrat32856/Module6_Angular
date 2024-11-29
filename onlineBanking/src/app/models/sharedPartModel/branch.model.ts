import { Employee } from "../employee.model";
import { Account } from "./account.model";
import { Department } from "./department.model";

export interface Branch {
    id: number;
    branchName: string; // E.g., "Downtown Branch"
    location: string; // E.g., "New York"
    employees: Employee[]; // List of employees in the branch
    departments: Department[]; // List of departments in the branch
    accounts: Account[]; // List of accounts under the branch
  }