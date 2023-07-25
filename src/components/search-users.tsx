"use client";

import { searchUsers } from "@/utils/fetch-data";
import { useQuery } from "@tanstack/react-query";
import { useContext, type FC } from "react";
import { toast } from "react-hot-toast";
import UserCard from "./user-card";
import { SearchParamsContext } from "@/context/search-params-context";
import FollowersChart from "./followers-chart";

const SearchUsers: FC = () => {
  const { search } = useContext(SearchParamsContext);
  const isRequiredCondition =
    search.length >= 4 || search !== "doublevpartners";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", search],
    refetchOnWindowFocus: false,
    queryFn: () => searchUsers(search),
    enabled: isRequiredCondition,
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

  const dataToPlot = data.items.map((user) => ({
    user: user.login,
    followers: user.followers,
  }));

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {data.items.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <FollowersChart dataToPlot={dataToPlot} />
    </div>
  );
};

export default SearchUsers;
