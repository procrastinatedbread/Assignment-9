import { Mail } from "../types";
import { ActionType, StateType } from "../reducer/mailReducer.types";

export type MailProviderProps = {
  children: React.ReactNode;
};

export interface MailContextValue extends StateType {
  dispatch: React.Dispatch<ActionType>;
}
