import { Mail } from "../types";

export type StateType = {
  data: Mail[];
  showStarred: boolean;
  showUnread: boolean;
  spam: Mail[];
  trash: Mail[];
};

type StarMailAction = {
  type: "STAR_MAIL";
  payload: string;
};

type DeleteActions = {
  type: "DELETE_MAIL" | "DELETE_FOREVER";
  payload: Mail;
};

type ReadActions = {
  type: "UNREAD_MAIL" | "MARK_AS_READ";
  payload: string;
};

type SpamActions = {
  type: "ADD_TO_SPAM" | "REMOVE_FROM_SPAM";
  payload: Mail;
};

type ToggleActions = {
  type: "TOGGLE_UNREAD" | "TOGGLE_STARRED";
};

export type ActionType =
  | StarMailAction
  | DeleteActions
  | ReadActions
  | SpamActions
  | ToggleActions;
