"use client";
import { SearchParamsContext } from "@/context/search-params-context";
import { useContext, type FC, type FormEvent } from "react";
import { toast } from "react-hot-toast";

const UserForm: FC = () => {
  const { setSearch } = useContext(SearchParamsContext);
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { search } = event.currentTarget;
    if (!search.value) return;

    if (search.value.length < 4) {
      toast.error("Please enter at least 4 characters");
      return;
    }
    if (search.value === "doublevpartners") {
      toast.error("you can not search this word");
      return;
    }
    setSearch(event.currentTarget.search.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Search for any Github user</h1>
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <input
          className="rounded-md border-2 border-blue-500 p-1 text-black"
          type="text"
          placeholder="Search an user"
          name="search"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default UserForm;
