import { UserAvatar } from "../UserAvatar";
import {
  MdArrowDropDown,
  AiFillStar,
  AiOutlineStar,
  CgMailReply,
  HiDotsVertical,
} from "../../utils/icons";
import { allActions } from "../../utils/constants";
import { useMail } from "../../context/MailContext";
import { timeAgo } from "../../utils/functions";

function SenderDetails() {
  const { state, dispatch } = useMail();
  const { sender, starred, createdAt } = state?.currentMail;
  const time = timeAgo(createdAt);

  return (
    <div className="grid grid-cols-12 h-10">
      <div className="col-span-1 m-2">
        <UserAvatar user={sender} />
      </div>
      <div className="col-span-6">
        <p className="text-lg col-span-2 line-clamp-1 text-left font-medium">
          {sender.name}
        </p>
        <div className="flex">
          <span>to me</span>
          <MdArrowDropDown className="iconSize7" />
        </div>
      </div>
      <div className="col-span-5 flex flex-end">
        <div
          onClick={() =>
            dispatch({
              type: allActions.Star,
              payload: { ...state?.currentMail, starred: !starred },
            })
          }>
          {starred ? (
            <AiFillStar className="iconSize7 text-yellow-500" />
          ) : (
            <AiOutlineStar className="iconSize7" />
          )}
        </div>
        <CgMailReply className="iconSize7" />
        <HiDotsVertical className="iconSize7" />
        <span className="col-span-1 text-sm text-gray-500 ml-2">{time}</span>
      </div>
    </div>
  );
}

export default SenderDetails;
