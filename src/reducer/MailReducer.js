import { allActions } from "../utils/constants";
const { SetInbox, SetSendMails } = allActions;

export const MailReducer = (state, { type, payload }) => {
  switch (type) {
    case SetInbox:
      return {
        ...state,
        allMails: payload.allMails,
        inbox: payload.inbox,
        send: payload.send,
      };
    default:
      return state;
  }
};
