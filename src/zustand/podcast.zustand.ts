import { create } from "zustand";

interface SearchParams {
  paramToSearch: string;
  setParamToSearch: (paramToSearch: string) => void;
}

export const useSearch = create<SearchParams>()((set) => ({
  paramToSearch: "",
  setParamToSearch: (paramToSearch) => set(() => ({ paramToSearch })),
}));
