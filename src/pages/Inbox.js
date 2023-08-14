import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useMail } from "../context/MailContext";
import { MailCard } from "../components/MailCard";
import { MdFilterList } from "../utils/icons";

export default function Inbox() {
  const { state, dispatch } = useMail();
  let readCount = 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="mainContainerGrid">
          <div className="flex flex-row justify-between py-2">
            <h2 className="font-bold text-2xl ml-4 pt-4">All Mails</h2>
            <MdFilterList className="mr-1 w-10 h-10" />
          </div>
          <hr className="border border-white" />
          <div>
            {state?.allMails?.map((mail) => (
              <div key={mail.id}>
                <MailCard mail={mail} />
                <hr className="border border-gray-360" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
