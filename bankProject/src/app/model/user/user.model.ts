import { AccountModel } from "./account.model";
import { LoanModel } from "./loan.model";
import { TransactionModel } from "./transaction.model";
import { UserDashboard } from "./userdashboard.model";
import { UserProfile } from "./userprofile.model";


export class UserModel {
    id !: number;
    username !: string;
    password !: string;
    name !: string;
    email !: string;
    phoneNumber !: string;
    address !: string;
    accounts !: AccountModel[];
    transactions !: TransactionModel[];
    loans !: LoanModel[];
    // profile !: UserProfile;
    dashboard !: UserDashboard;
  }