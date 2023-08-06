import {
  AiOutlineStar,
  AiFillStar,
  MdLabelImportantOutline,
  MdLabelImportant,
} from "../utils/icons";
import { timeAgo } from "../utils/functions";
import { useNavigate } from "react-router-dom";
import { useMail } from "../context/MailContext";
import { allActions } from "../utils/constants";

export function MailCard({ mail }) {
  const { dispatch } = useMail();
  const {
    mailId,
    subject,
    mailBody,
    sender,
    starred,
    important,
    createdAt,
    read,
  } = mail;
  const { Bookmark, Star, MarkRead } = allActions;

  const time = timeAgo(createdAt);
  const navigate = useNavigate();
  const classes = "text-lg col-span-2 line-clamp-1 text-left";

  const goToMail = () => {
    navigate(`/mail/${mailId}`);
    if (!read) {
      dispatch({
        type: MarkRead,
        payload: { ...mail, read: true },
      });
    }
  };

  return (
    <div className="flex flex-col shadow-md p-4 cursor-pointer">
      <div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-1 flex justify-start">
            <div
              onClick={() =>
                dispatch({
                  type: Star,
                  payload: { ...mail, starred: !mail?.starred },
                })
              }>
              {starred ? (
                <AiFillStar className="mr-1 w-7 h-7 text-yellow-500" />
              ) : (
                <AiOutlineStar className="mr-1 w-7 h-7" />
              )}
            </div>
            <div
              onClick={() =>
                dispatch({
                  type: Bookmark,
                  payload: { ...mail, important: !mail?.important },
                })
              }>
              {important ? (
                <MdLabelImportant className="mr-1 w-7 h-7 text-yellow-500" />
              ) : (
                <MdLabelImportantOutline className="mr-1 w-7 h-7" />
              )}
            </div>
          </div>
          <span className={`${classes} ${read ? "" : "font-bold"} `}>
            {sender?.name}
          </span>

          <div className="col-span-8 flex flex-start" onClick={goToMail}>
            <span className={`${classes} ${read ? "" : "font-bold"}`}>
              {subject}
              <p className="text-base font-normal mt-2 line-clamp-1 text-gray-800 dark:text-gray-300">
                {mailBody}
              </p>
            </span>
          </div>
          <span className="col-span-1 text-sm text-gray-500 ml-2">{time}</span>
        </div>
      </div>
    </div>
  );
}
