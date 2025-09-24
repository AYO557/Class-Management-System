import type { RegisterForm, User } from "../libs/types";

interface UseGetUsersProps {
  onSuccess?: (users: User[]) => void;
  onError?: (error: Error) => void;
}

export default function useAddUserApi({
  onSuccess,
  onError,
}: UseGetUsersProps = {}) {
  const addUser = async (data: RegisterForm): Promise<User | undefined> => {
    try {
      const users = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone_number: data.phone_number,
          password: data.password,
        }),
      });

      if (!users.ok) {
        throw new Error("Failed to add user");
      }

      const user = await users.json();

      onSuccess?.(user);

      return user;
    } catch (error) {
      onError?.(error as Error);

      console.error(error);
      return;
    }
  };

  return {
    addUser,
  };
}
