import { useMail } from "../context/MailContext";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { MailCard } from "../components/MailCard";
import { MdFilterList } from "../utils/icons";
import MailDetailComponent from "../components/MailDetails/MailDetailComponent";
import { useParams } from "react-router-dom";
import { allActions } from "../utils/constants";

export default function MailDetails() {
  const { mailId } = useParams();
  const { state, dispatch } = useMail();
  const currentMail = state?.allMails?.find(
    (mail) => mail.mailId === parseInt(mailId)
  );

  dispatch({ tyep: allActions.SetCurrentMail, payload: currentMail });

  console.log("state", currentMail);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="mainContainerGrid">
          <MailDetailComponent mail={currentMail} />
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
