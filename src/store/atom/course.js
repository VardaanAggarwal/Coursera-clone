import { atom } from "recoil";
export const courseState = atom({
  key: "courseState",
  default: {
    isLoading: false,
    course: null,
  },
});
