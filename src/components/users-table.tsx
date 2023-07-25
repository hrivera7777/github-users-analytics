"use client";

import { storedUsers } from "@/utils/fetch-data";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { toast } from "react-hot-toast";

const UserTable: FC = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["storedUsers"],
    refetchOnWindowFocus: false,
    queryFn: storedUsers,
  });
  if (isError) {
    toast.error("Error fetching data");
    return <span> No users found</span>;
  }
  if (isLoading) {
    toast.loading("Loading data");
    return <span> No users found</span>;
  }
  toast.dismiss();

  const TABLE_HEAD = [
    "Username",
    "Id",
    "Full name",
    "Followers",
    "Following",
    "Public Repos",
    "Public Gists",
  ];

  return (
    <div className="flex flex-col gap-4">
      <table className="w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-blue-gray-100 bg-blue-gray-50 border-b p-4"
              >
                <span className="font-normal leading-none opacity-70">
                  {head}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(
            (
              {
                id,
                login,
                name,
                followers,
                following,
                public_gists,
                public_repos,
              },
              index,
            ) => {
              const isLast = index === users.length - 1;
              const classes = isLast
                ? "p-4 "
                : "p-4 border-b border-blue-gray-50 ";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <span className="font-normal">{login}</span>
                  </td>
                  <td className={classes}>
                    <span className="font-normal">{id}</span>
                  </td>
                  <td className={classes}>
                    <span className="font-normal">{name}</span>
                  </td>
                  <td className={classes}>
                    <span className="font-medium">{followers}</span>
                  </td>
                  <td className={classes}>
                    <span className="font-medium">{following}</span>
                  </td>
                  <td className={classes}>
                    <span className="font-medium">{public_repos}</span>
                  </td>
                  <td className={classes}>
                    <span className="font-medium">{public_gists}</span>
                  </td>
                </tr>
              );
            },
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
