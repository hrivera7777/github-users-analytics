"use client";
import SearchUsers from "@/components/search-users";
import UserForm from "@/components/user-form";
import { SearchParamsProvider } from "@/context/search-params-context";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchParamsProvider>
        <div className="flex flex-col gap-4">
          <UserForm />
          <SearchUsers />
        </div>
      </SearchParamsProvider>
      <Toaster />
    </main>
  );
}
