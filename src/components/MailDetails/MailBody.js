import { useMail } from "../../context/MailContext";

function MailBody() {
  const { state } = useMail();
  const { currentMail } = state;
  const { mailBody, media } = currentMail;
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1"></div>
      <div className="col-span-9 mt-8 p-4 mx-auto">
        <img src={media?.src} alt={media?.alt} />
        <p className="text-base md:text-lg font-normal">{mailBody}</p>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}

export default MailBody;
