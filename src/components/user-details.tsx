"use client";

import { exportUser, userDetails } from "@/utils/fetch-data";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { FC } from "react";
import { toast } from "react-hot-toast";

interface Props {
  slug: string;
}

const UserDetails: FC<Props> = ({ slug }) => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user-details", slug],
    refetchOnWindowFocus: false,
    queryFn: () => userDetails(slug),
  });

  const mutation = useMutation({
    mutationFn: exportUser,
  });

  if (isError) {
    toast.error("Error fetching data");
    return <span> No users found</span>;
  }
  if (isLoading) {
    toast.loading("Loading data");
    return <span> No users found</span>;
  }

  const handleExportUser = () => {
    mutation.mutate(user, {
      onSuccess: () => {
        toast.success("User exported");
      },
    });
  };

  toast.dismiss();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        key={user.id}
        className="mt-24 flex flex-col items-center justify-center gap-4 p-2"
      >
        <span className="text-2xl font-bold">Username: {user.login}</span>
        <span className="font-bold">Id: {user.id}</span>
        <span className="font-bold">Full name: {user.name}</span>
        <span className="font-bold">Followers: {user.followers}</span>
        <span className="font-bold">Following: {user.following}</span>
        <span className="font-bold">Public Repos: {user.public_repos}</span>
        <span className="font-bold">Public Gists: {user.public_gists}</span>
        <span className="font-bold">
          Profile url:{" "}
          <a href={user.html_url} target="_blank">
            {user.html_url}
          </a>
        </span>
        <span className="font-bold">
          Repositories url:{" "}
          <a href={user.repos_url} target="_blank">
            {user.repos_url}
          </a>
        </span>
        <img
          src={user.avatar_url}
          alt="avatar"
          className=" max-w-xl rounded-md"
        />
      </div>
      <button
        type="button"
        className="h-full w-80 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleExportUser}
      >
        Export user
      </button>
    </div>
  );
};

export default UserDetails;
