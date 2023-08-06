import { createContext, useContext, useEffect, useReducer } from "react";
import fetchMail from "../api/fetchMail";
import { MailReducer } from "../reducer/MailReducer";
import { allActions } from "../utils/constants";

export const MailContext = createContext();

export function MailProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem("state"));
  const currentuser = {
    userId: 2,
    email: "emma@example.com",
    name: "Emma Watson",
  };
  const MailDetails = async () => {
    try {
      const { status, data } = await fetchMail(
        "https://example.com/api/allemails"
      );
      if (status === 200) {
        const inboxMails = data?.filter(
          (mail) => mail?.receiver?.email === currentuser.email
        );
        const sendMails = data?.filter(
          (mail) => mail.sender.email === currentuser.email
        );

        localStorage.setItem(
          "state",
          JSON.stringify({
            allMails: data,
            inbox: inboxMails,
            send: sendMails,
            currentMail: null,
            trash: [],
          })
        );
        dispatch({
          type: allActions.SetInbox,
          payload: { allMails: data, inbox: inboxMails, send: sendMails },
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const mailState = {
    allMails: [],
    send: [],
    inbox: [],
    filtered: [],
    currentMail: null,
    trash: [],
  };

  const [state, dispatch] = useReducer(MailReducer, mailState);

  useEffect(() => {
    MailDetails();
  }, []);

  return (
    <MailContext.Provider value={{ currentuser, state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
}
export const useMail = () => useContext(MailContext);
