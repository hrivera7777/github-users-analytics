"use client";
import SearchUsers from "@/components/search-users";
import UserForm from "@/components/user-form";
import { SearchParamsProvider } from "@/context/search-params-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <QueryClientProvider client={queryClient}>
        <SearchParamsProvider>
          <div className="flex flex-col gap-4">
            <UserForm />
            <SearchUsers />
          </div>
        </SearchParamsProvider>
        <Toaster />
      </QueryClientProvider>
    </main>
  );
}
