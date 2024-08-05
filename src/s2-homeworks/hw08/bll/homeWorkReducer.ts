import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  switch (action.type) {
    case "sort": {
      if (action.payload === "up") {
        return state.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === "down") {
        return state.sort((a, b) => b.name.localeCompare(a.name));
      }
      break
    }
    case "check": {
      return state.sort((a, b) => a.name.localeCompare(b.name)).filter((u) => u.age >= 18);
    }
    default:
      return state;
  }
  return state
};
