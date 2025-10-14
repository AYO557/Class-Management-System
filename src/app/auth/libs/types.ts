interface RegisterForm extends BaseUser {
  password: string;
  confirm_password: string;
  terms: boolean;
}

export interface CreateUserPayload extends BaseUser {
  role?: string;
  password: string;
}

interface User extends BaseUser {
  _id: string;
  role: string;
}

interface BaseUser {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

interface LoginForm {
  email: string;
  password: string;
}

interface AuthState {
  userData: UserData | null;
  setUserData: (user: UserData | null) => void;
}

interface UserData {
  token: string;
  user: User;
}

export type { RegisterForm, LoginForm, User, AuthState, UserData };
