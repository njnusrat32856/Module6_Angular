// import { UserModel } from "./user.model";

import { UserModel } from "./user.model";

export interface AuthResponse {

    token: string;
    user: UserModel
}