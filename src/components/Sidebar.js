import {
  MdMenu,
  MdLabelImportantOutline,
  HiOutlineInbox,
  HiOutlineStar,
  MdDeleteOutline,
  MdSend,
} from "../utils/icons";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
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
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/explore")}>
          Inbox
        </b>
      </NavLink>
      <NavLink
        to="/important"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdLabelImportantOutline className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/liked")}>
          Important
        </b>
      </NavLink>
      <NavLink
        to="/starred"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <HiOutlineStar className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/watchlist")}>
          Starred
        </b>
      </NavLink>
      <NavLink
        to="/trash"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdDeleteOutline className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/playlist")}>
          Trash
        </b>
      </NavLink>
      <NavLink
        to="/send"
        className={({ isActive }) => {
          return isActive
            ? `${classes} text-blue-500`
            : `${classes} text-gray-800`;
        }}>
        <MdSend className="sidebarIcon" />
        <b
          className="hidden md:inline-block my-auto"
          onClick={() => navigate("/upload")}>
          Sent
        </b>
      </NavLink>
    </div>
  );
}

export default Sidebar;
