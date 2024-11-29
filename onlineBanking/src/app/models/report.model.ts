import { Employee } from "./employee.model";

export interface Report {
    id: number; // Unique ID for the report
    title: string; // Title of the report
    description: string; // Description of the report
    generatedAt: string; // Date and time when the report was generated (ISO 8601 string)
    generatedBy: Employee; // Employee who generated the report
  }