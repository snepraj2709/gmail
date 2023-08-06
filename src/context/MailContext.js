import { createContext, useContext, useEffect, useState } from "react";
import fetchMail from "../api/fetchMail";

export const MailContext = createContext();

export function MailProvider({ children }) {
  const [inbox, setInbox] = useState([]);
  const [sent, setSent] = useState([]);

  const MailDetails = async () => {
    try {
      const { status, data } = await fetchMail(
        "https://example.com/api/allemails"
      );
      if (status === 200) {
        setInbox(data.emails);
        setSent(data.sentEmails);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    MailDetails();
  }, []);

  return (
    <MailContext.Provider value={{ inbox, setInbox, sent }}>
      {children}
    </MailContext.Provider>
  );
}
export const useMail = () => useContext(MailContext);
