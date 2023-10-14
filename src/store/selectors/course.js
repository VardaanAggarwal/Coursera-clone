import { selector } from "recoil";
import { courseState } from "../atom/course";

export const isCourseLoading = selector({
  key: "courseLoadingState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.isLoading;
  },
});

export const courseDetailsState = selector({
  key: "courseDetailsState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course;
  },
});

export const courseTitleState = selector({
  key: "courseTitleState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course.title;
  },
});
export const courseDescriptionState = selector({
  key: "courseDescriptionState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course.description;
  },
});
export const coursePriceState = selector({
  key: "coursePriceState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course.price;
  },
});
export const courseImageState = selector({
  key: "courseImageState",
  get: ({ get }) => {
    const state = get(courseState);
    return state.course.imageLink;
  },
});
