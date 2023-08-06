import { useMail } from "../../context/MailContext";
import { MdLabelImportantOutline, MdLabelImportant } from "../../utils/icons";
import { allActions } from "../../utils/constants";

function SubjectDetails({ mail }) {
  const { state, dispatch } = useMail();
  const { subject, important } = state?.currentMail;
  return (
    <div className=" grid grid-cols-12">
      <div className="col-span-1"></div>
      <div className="col-span-11 flex py-2">
        <p className="text-xl col-span-2 line-clamp-1 text-left font-bold">
          {subject}
        </p>
        <div
          onClick={() =>
            dispatch({
              type: allActions.Bookmark,
              payload: { ...mail, important: !mail?.important },
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
