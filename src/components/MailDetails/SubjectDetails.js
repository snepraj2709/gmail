import { useMail } from "../../context/MailContext";
import { MdLabelImportantOutline, MdLabelImportant } from "../../utils/icons";
import { allActions } from "../../utils/constants";

function SubjectDetails() {
  const { state, dispatch } = useMail();
  const { subject, important } = state?.currentMail;
  return (
    <div className=" grid grid-cols-12 mt-5">
      <div className="col-span-1"></div>
      <div className="col-span-11 flex py-2 my-auto">
        <p className="text-xl md:text-2xl col-span-2 line-clamp-1 text-left font-bold my-auto">
          {subject}
        </p>
        <div
          className="my-auto"
          onClick={() =>
            dispatch({
              type: allActions.Bookmark,
              payload: { ...state?.currentMail, important: !important },
            })
          }>
          {important ? (
            <MdLabelImportant className="iconSize7 text-yellow-500" />
          ) : (
            <MdLabelImportantOutline className="iconSize7" />
          )}
        </div>
      </div>
    </div>
  );
}

export default SubjectDetails;
