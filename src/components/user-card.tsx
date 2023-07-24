import { User } from "@/types";
import Link from "next/link";
import { FC } from "react";

interface Props {
  user: User;
}

const UserCard: FC<Props> = ({ user }) => {
  return (
    <Link href={`/user-details/${user.login}`}>
      <div
        key={user.id}
        className="flex flex-col gap-4 rounded-md border-2 border-gray-500 p-2"
      >
        <span className="font-bold">Name: {user.login}</span>
        <span className="font-bold">Id: {user.id}</span>
        <img src={user.avatar_url} alt="avatar" className="rounded-md" />
      </div>
    </Link>
  );
};

export default UserCard;
