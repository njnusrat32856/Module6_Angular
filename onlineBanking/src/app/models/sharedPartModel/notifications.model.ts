import { Customer } from "../customerPartModel/customer.model";
import { Employee } from "../employee.model";

export interface Notification {
    id: number; // Unique ID for the notification
    message: string; // The message or content of the notification
    isRead: boolean; // Flag to check if the notification has been read or not
    customer: Customer | null; // The customer related to the notification (nullable)
    employee: Employee | null; // The employee related to the notification (nullable)
    createdAt: string; // Timestamp of when the notification was created
  }