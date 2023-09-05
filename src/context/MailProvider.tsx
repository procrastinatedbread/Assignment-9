import React, { createContext, useContext, useReducer } from "react";

import { mails } from "../data/inbox";
import { mailReducer } from "../reducer/mailReducer";
import { Mail } from "../types";
import { MailContextValue, MailProviderProps } from "./mailProvider.types";

const MailContext = createContext<MailContextValue | null>(null);

const useMail = () => {
  const context = useContext(MailContext);
  if (!context) {
    throw new Error(
      "useMail must be used withing components wrapped inside MailProvider"
    );
  }
  return context;
};

function getFilteredData(
  mailList: Mail[],
  { showStarred, showUnread }: { showStarred: boolean; showUnread: boolean }
) {
  return mailList
    .filter(({ isStarred }) => (showStarred ? isStarred : true))
    .filter(({ unread }) => (showUnread ? unread : true));
}

const MailProvider: React.FC<MailProviderProps> = ({
  children
}): JSX.Element => {
  const [{ data, showStarred, showUnread, spam, trash }, dispatch] = useReducer(
    mailReducer,
    {
      data: mails,
      showStarred: false,
      showUnread: false,
      spam: [],
      trash: []
    }
  );

  const filteredData = getFilteredData(data, {
    showStarred: showStarred,
    showUnread: showUnread
  });

  const mailContext: MailContextValue = {
    data: filteredData,
    dispatch,
    spam,
    trash,
    showStarred,
    showUnread
  };

  return (
    <MailContext.Provider value={mailContext}>{children}</MailContext.Provider>
  );
};

export { MailProvider, useMail };
