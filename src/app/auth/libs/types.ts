interface RegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  terms: boolean;
}

interface User extends RegisterForm {
  id: number;
}

interface LoginForm {
  email: string;
  password: string;
}

export type { RegisterForm, LoginForm, User };
