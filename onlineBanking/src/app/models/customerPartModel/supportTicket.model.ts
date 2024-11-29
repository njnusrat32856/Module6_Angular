import { Employee } from "../employee.model";
import { Customer } from "./customer.model";

export interface SupportTicket {
    id: number;
    issue: string;
    status: string; // E.g., "Open", "In Progress", "Closed"
    createdAt: string; // or Date type if parsed properly
    customer: Customer;
    assignedTo: Employee; // Employee handling the ticket
  }