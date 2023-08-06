import {
  MdMenu,
  MdLabelImportantOutline,
  HiOutlineInbox,
  AiOutlineStar,
  MdDeleteOutline,
  MdSend,
} from "../utils/icons";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const classes =
    "flex justify-start px-1 cursor-pointer bg-slate-100 h-10 rounded-full hover:text-blue-500 group my-2";

  return (
    <div className="col-span-2 p-5">
      <NavLink
        to="/inbox"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <HiOutlineInbox className="sidebarIcon" />
        <b className="hidden md:inline-block my-auto">Inbox</b>
      </NavLink>
      <NavLink
        to="/important"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdLabelImportantOutline className="sidebarIcon" />
        <b className="hidden md:inline-block my-auto">Important</b>
      </NavLink>
      <NavLink
        to="/starred"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <AiOutlineStar className="sidebarIcon" />
        <b className="hidden md:inline-block my-auto">Starred</b>
      </NavLink>
      <NavLink
        to="/trash"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdDeleteOutline className="sidebarIcon" />
        <b className="hidden md:inline-block my-auto">Trash</b>
      </NavLink>
      <NavLink
        to="/send"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdSend className="sidebarIcon" />
        <b className="hidden md:inline-block my-auto">Send</b>
      </NavLink>
    </div>
  );
}

export default Sidebar;
