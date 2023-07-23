"use client";

import { searchUsers } from "@/utils/fetch-data";
import { useQuery } from "@tanstack/react-query";
import { useContext, type FC } from "react";
import { toast } from "react-hot-toast";
import UserCard from "./user-card";
import { SearchParamsContext } from "@/context/search-params-context";

const SearchUsers: FC = () => {
  const { search } = useContext(SearchParamsContext);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["items", search],
    refetchOnWindowFocus: false,
    queryFn: () => searchUsers(search),
    enabled: search !== "",
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
  return (
    <div className="flex flex-col gap-4">
      {data.items.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchUsers;
