import { useMail } from "../../context/MailContext";
import {
  MdLabelImportantOutline,
  MdLabelImportant,
  MdArrowBack,
  MdOutlineArchive,
  RiSpam2Line,
  MdDeleteOutline,
  AiOutlineMail,
  HiOutlineClock,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  HiDotsVertical,
} from "../../utils/icons";
import { allActions } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

function Iconbar({ important }) {
  const { state, dispatch } = useMail();
  const { currentMail } = state;
  const navigate = useNavigate();

  return (
    <div>
      <div className="col-span-1 grid grid-cols-12 bg-slate-300 dark:bg-slate-500 pt-3">
        <div className="col-span-1">
          <MdArrowBack
            className="iconSize7 mx-1"
            onClick={() => navigate(-1)}
          />
        </div>

        <div className="col-span-9 flex justify-start space-x-3">
          <MdOutlineArchive className="iconSize7" />
          <RiSpam2Line className="iconSize7" />
          <MdDeleteOutline className="iconSize7" />
          <AiOutlineMail className="iconSize7" />
          <HiOutlineClock className="iconSize7" />
          <div
            onClick={() =>
              dispatch({
                type: allActions.Bookmark,
                payload: { ...currentMail, important: !currentMail?.important },
              })
            }>
            {important ? (
              <MdLabelImportant className="iconSize7 text-yellow-500" />
            ) : (
              <MdLabelImportantOutline className="iconSize7" />
            )}
          </div>
          <HiDotsVertical className="iconSize7" />
        </div>
        <div className="cols-span-2 flex justify-end w-full">
          <p className="text-sm font-extralight col-span-1">3 of 10</p>
          <MdKeyboardArrowLeft className="iconSize7" />
          <MdKeyboardArrowRight className="iconSize7" />
        </div>
      </div>
    </div>
  );
}

export default Iconbar;
