import { userState } from "../atom/user";
import { selector } from "recoil";
export const userLoadingState = selector({
  key: "userLoadingState",
  get: ({ get }) => {
    const state = get(userState);
    return state.isLoading;
  },
});
