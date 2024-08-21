import { AdminDashboard } from "./admindashboard.model";
import { AdminProfile } from "./adminprofile.model";


export class AdminModel {
    id !: number;
    username !: string;
    password !: string;
    name !: string;
    email !: string;
    role !: 'admin';
    profile !: AdminProfile;
    dashboard !: AdminDashboard;
  }