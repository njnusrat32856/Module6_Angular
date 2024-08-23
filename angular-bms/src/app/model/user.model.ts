// export class UserModel {
//     id !: string
//     name !: string
//     email !: string
//     password !: string
//     role !: string
//   }

import { LoanModel } from "./loan.model";
import { TransactionModel } from "./transaction.model";
import { UserProfile } from "./userprofile.model";

export class UserModel {
  id !: number;
  name !: string;
  email !: string;
  password !: string;
  accountNumber !: string;
  balance !: number;
  transactions !: TransactionModel;
  loans !: LoanModel;
  profile !: UserProfile;
  role !: string;
}