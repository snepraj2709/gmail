import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdSearch, FaUser, FaSun, FaMoon, SiGmail } from "../utils/icons";
import { useTheme } from "../context/ThemeContext";
import { useMail } from "../context/MailContext";
import { allActions } from "../utils/constants";

function Header() {
  const { darkTheme, setDarkTheme } = useTheme();
  const { state, dispatch } = useMail();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = { username: "johndoe", password: "12345" };

  // console.log(filteredMails);

  function searchMails(e) {
    const filteredMails = state.allMails?.filter(
      (mail) => mail.sender.username !== currentUser.username
    );
    setInput(e.target.value);
    e.target.value = ""
      ? dispatch({ type: allActions.FilterMail, payload: state?.allMails })
      : dispatch({ type: allActions.FilterMail, payload: filteredMails });
  }

  return (
    <div className="bg-blue-400 dark:bg-blue-950">
      <div className="flex flex-row justify-between my-2 lg:max-w-6xl w-100 mx-auto">
        <div
          className="flex ml-3 md:ml-10 cursor-pointer"
          onClick={() => navigate("/")}>
          <SiGmail className="w-6 h-6 mx-1 my-auto text-blue-950 dark:text-blue-100" />
          <h2 className="hidden md:inline-block my-auto font-sans text-lg font-bold">
            Gmail
          </h2>
        </div>

        <div className="flex border border-gray-200 shadow-lg h-7 rounded-full">
          <MdSearch className="w-6 h-6 mx-1 my-auto" />
          <input
            type="text"
            id="searchMail"
            value={input}
            onClick={() => location?.pathname !== "/" && navigate("/")}
            onChange={(e) => searchMails(e)}
            className="bg-transparent outline-none"
          />
          <datalist id="searchMail">
            {state?.allMails?.map((mail) => (
              <options value={mail.subject}></options>
            ))}
            <option value="Sachin Tendulkar" />
          </datalist>
        </div>
        <div className="flex md:mr-10">
          <FaUser className="w-5 h-5 mx-2 my-auto" />
          <button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? (
              <FaSun className="w-5 h-5 mx-2 my-auto" />
            ) : (
              <FaMoon className="w-5 h-5 mx-2 my-auto" />
            )}
          </button>
        </div>
      </div>
      <hr className="border-gray-500" />
    </div>
  );
}

export default Header;
