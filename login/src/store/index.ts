import { create } from "zustand";
import RootState from "@/types/storeProps";

const useStore = create<RootState>((set) => ({
  accessToken: '',
  setAccessToken : (accessToken :string |null) => set({accessToken})
}));

export default useStore;