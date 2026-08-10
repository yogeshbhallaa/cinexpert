// Login
export class UserForLogin {
  userName: string;
  password: string;
  token: string;
}

// Register
export interface UserForRegister {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  mobile?: number;
  email?: string;

}

