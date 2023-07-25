"use client";
import SearchUsers from "@/components/search-users";
import UserForm from "@/components/user-form";
import { SearchParamsProvider } from "@/context/search-params-context";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchParamsProvider>
        <div className="flex flex-col gap-4">
          <Link
            className="h-full w-80 rounded bg-gray-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-700"
            href="/stored-users"
          >
            {" "}
            Show stored users
          </Link>
          <UserForm />
          <SearchUsers />
        </div>
      </SearchParamsProvider>
      <Toaster />
    </main>
  );
}
