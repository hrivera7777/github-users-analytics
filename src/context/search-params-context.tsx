import { ContextSearchParams } from "@/types";
import { createContext, useMemo, useState } from "react";

const initialContext = {
  search: "",
  setSearch: () => {},
};
const SearchParamsContext = createContext<ContextSearchParams>(initialContext);

interface Props {
  children: React.ReactNode;
}

const SearchParamsProvider = ({ children }: Props) => {
  const [search, setSearch] = useState("");
  const value = useMemo(
    () => ({
      search,
      setSearch,
    }),
    [search, setSearch],
  );
  return (
    <SearchParamsContext.Provider value={value}>
      {children}
    </SearchParamsContext.Provider>
  );
};

export { SearchParamsContext, SearchParamsProvider };
