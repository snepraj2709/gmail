import Iconbar from "./Iconbar";
import MailBody from "./MailBody";
import ReplyThread from "./ReplyThread";
import SenderDetails from "./SenderDetails";
import SubjectDetails from "./SubjectDetails";

function MailDetailComponent({ mail }) {
  return (
    <div className="flex flex-col">
      <Iconbar />
      <SubjectDetails />
      <SenderDetails />
      <MailBody />
      <ReplyThread />
    </div>
  );
}

export default MailDetailComponent;
