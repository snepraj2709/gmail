import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useMail } from "../context/MailContext";
import { MailCard } from "../components/MailCard";
import { MdFilterList } from "../utils/icons";

export default function Home() {
  const { state } = useMail();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-8 overflow-hidden lg:max-w-6xl px-5 gap-2 grow">
        <Sidebar />
        <div className="mainContainerGrid">
          <div className="flex flex-row justify-between py-2">
            <h2 className="font-bold text-2xl ml-4 pt-4">Inbox</h2>
            <MdFilterList className="mr-1 w-10 h-10" />
          </div>
          <hr className="border dark:border-white  border-black" />
          <div>
            {state?.inbox?.length > 0 ? (
              state?.inbox?.map((mail) => (
                <div key={mail.id}>
                  <MailCard mail={mail} />
                  <hr className="border dark:border-gray-360 border-slate-300" />
                </div>
              ))
            ) : (
              <div className="font-semibold text-lg md:text-xl mt-6 text-center">
                No mails in Inbox so far.
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}
