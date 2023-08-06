import { CgMailReply, CgMailForward } from "../../utils/icons";

function ReplyThread() {
  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-1"></div>
      <div className="flex col-span-10 space-x-2">
        <button className="flex dark:bg-slate-100 border border-slate-700 text-black px-4 py-2 rounded-full">
          <CgMailReply className="iconSize7" />
          <p>Reply</p>
        </button>
        <button className="flex dark:bg-slate-100 border border-slate-700 text-black px-4 py-2 rounded-full">
          <CgMailForward className="iconSize7" />
          <p>Forward</p>
        </button>
      </div>
    </div>
  );
}

export default ReplyThread;
