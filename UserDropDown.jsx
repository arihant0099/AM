import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logoutUserAct } from "../../../Store/Actions/authActions";

function UserDropDown({ showOptions }) {
  const dispatch = useDispatch();

  function onClickDropdown() {
    showOptions((p) => !p);
  }

  function onLogoutBtnClick() {
    dispatch(logoutUserAct());
  }

  return (
    <div className="top-0 flex  flex-col shadow-2xl px-2 py-5 gap-4 rounded-md mt-40 md:mt-20 right-0 absolute    w-60 bg-white">
      <DropdownItem
        icon={<AiOutlineShoppingCart className=" text-lg" />}
        path="/myOrder"
        onClickDropdown={onClickDropdown}
        title="My Orders"
      />
      <DropdownItem
        icon={<AiOutlineHome className=" text-lg" />}
        path="/address"
        onClickDropdown={onClickDropdown}
        title="Saved Address"
      />
      <div
        onClick={onClickDropdown}
        className=" text-gray-600 hover:text-black  transition-all flex items-center gap-4 text-sm cursor-pointer"
      >
        <BiSolidLogOut className=" text-lg" />
        <button onClick={onLogoutBtnClick}>Logout</button>
      </div>
    </div>
  );
}

export default UserDropDown;

function DropdownItem({ path, title, icon, onClickDropdown }) {
  return (
    <Link
      onClick={onClickDropdown}
      className=" text-gray-600 hover:text-black  transition-all text-sm flex items-center gap-4"
      to={path}
    >
      {icon}
      {title}
    </Link>
  );
}