import { SearchUsersResponse } from "@/types";

export const searchUsers = async (
  searchParam: string,
): Promise<SearchUsersResponse> => {
  const result = await fetch(
    `https://api.github.com/search/users?q=${searchParam}`,
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  if (!result.ok) {
    throw new Error("Error fetching data");
  }
  return result.json();
};
