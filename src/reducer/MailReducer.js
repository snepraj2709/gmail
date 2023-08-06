import { allActions } from "../utils/constants";
const {
  SetInbox,
  SetSendMails,
  Bookmark,
  Star,
  MarkRead,
  DeleteMail,
  SetCurrentMail,
} = allActions;

export const MailReducer = (state, { type, payload }) => {
  switch (type) {
    case SetInbox:
      return {
        ...state,
        allMails: payload.allMails,
        inbox: payload.inbox,
        send: payload.send,
      };
    case Bookmark:
      return {
        ...state,
        allMails: [...state.allMails, payload],
      };

    case Star:
      return {
        ...state,
        allMails: [...state.allMails, payload],
      };

    case MarkRead:
      return {
        ...state,
        allMails: [...state.allMails, payload],
      };

    case DeleteMail: {
      const updatedMails = state?.allMails.filter(
        (mail) => mail.id !== payload.id
      );
      return {
        ...state,
        allMails: updatedMails,
        trash: [...state?.trash, payload],
      };
    }
    case SetCurrentMail:
      return {
        ...state,
        currentMail: payload,
      };
    default:
      return state;
  }
};

export const mailState = {
  allMails: [],
  send: [],
  inbox: [],
  filtered: [],
};
