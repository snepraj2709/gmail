import {
  HiOutlineStar,
  MdLabelImportantOutline,
  HiDotsVertical,
} from "../utils/icons";
import { timeAgo } from "../utils/functions";
import { useNavigate } from "react-router-dom";

export function MailCard({ mail }) {
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

  const time = timeAgo(createdAt);
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col shadow-md p-4 cursor-pointer"
      onClick={() => {
        navigate(`/mail/${mailId}`);
      }}>
      <div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row m-2 items-center">
            <div className="flex">
              <HiOutlineStar className="mr-1 w-7 h-7" />
              <MdLabelImportantOutline className="mr-1 w-7 h-7" />
            </div>
            <span className="text-base font-medium">{sender?.name}</span>
            <h2 className="text-lg font-semibold mt-2">{subject}</h2>
            <p className="text-md font-normal mt-2">{mailBody}</p>
            <span className="text-sm text-gray-500 ml-2">{time}</span>
          </div>
          <HiDotsVertical className="w-7 h-7 justify-center p-1" />
        </div>
      </div>
    </div>
  );
}
