import { SearchUsersResponse, User } from "@/types";

const baseUrl = "https://api.github.com";

export const searchUsers = async (
  searchParam: string,
): Promise<SearchUsersResponse> => {
  const totalUsersPerPage = 10;

  const result = await fetch(
    `${baseUrl}/search/users?q=${searchParam}&per_page=${totalUsersPerPage}`,
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  if (!result.ok) {
    throw new Error("Error fetching data");
  }

  // add the followers count to each user
  const data = await result.json();
  const users = data.items;
  const usersWithFollowers = await Promise.all(
    users.map(async (user: User) => {
      const followers = await fetch(`${user.url}`, {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      if (!followers.ok) {
        throw new Error("Error fetching data");
      }
      const followersData = await followers.json();
      return { ...user, followers: followersData.followers };
    }),
  );

  return { ...data, items: usersWithFollowers };
};

export const userDetails = async (slug: string): Promise<User> => {
  const result = await fetch(`${baseUrl}/users/${slug}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!result.ok) {
    throw new Error("Error fetching data");
  }
  return result.json();
};
