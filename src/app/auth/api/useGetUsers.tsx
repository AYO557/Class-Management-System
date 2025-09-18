import type { User } from "../libs/types";

interface UseGetUsersProps {
  onSuccess?: (users: User[]) => void;
  onError?: (error: Error) => void;
}

export default function useGetUsersApi({
  onSuccess,
  onError,
}: UseGetUsersProps = {}) {
  const getExistUsers = async (): Promise<User[]> => {
    try {
      const users = await fetch("http://localhost:3000/users");
      if (!users.ok) {
        throw new Error("Failed to fetch users");
      }

      const usersData = await users.json();
      onSuccess?.(usersData);

      return usersData;
    } catch (error) {
      onError?.(error as Error);
      console.error(error);
      throw Error("Sorry, something went wrong. Please try again later.");
    }
  };

  return {
    getExistUsers,
  };
}
