interface RegisterForm extends BaseUser {
  password: string;
  confirm_password: string;
  terms: boolean;
}

interface User extends BaseUser {
  id: string;
  role: string;
  password: string;
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
  user: User | null;
  setUser: (user: User | null) => void;
}

export type { RegisterForm, LoginForm, User, AuthState };
