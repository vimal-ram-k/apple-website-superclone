import apple_logo from "../assets/logos/apple-logo.svg";
import search_logo from "../assets/logos/search-datk.svg";
import store_bag from "../assets/logos/bag-light.svg";
import { MobileMenu } from "./menulist-mob";
import { useState } from "react";
import { Link } from "react-router-dom";
export const navbar_List = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Supports",
];

function NavigationBar() {
  const [mobMenuOpen, setmobMenuOpen] = useState(false);

  function MenubarToggled() {
    setmobMenuOpen((prevIsMobmenu: boolean) => !prevIsMobmenu);
  }

  return (
    <nav
      className=" container-fluid bg-black d-flex align-items-center justify-content-between justify-content-lg-center column-gap-lg-5 align-items-center "
      style={{ height: "60px" }}
    >
      <img src={apple_logo} alt="" width={18} height={18} />
      <ul className=" d-flex align-items-center  column-gap-4 p-0 m-0">
        {navbar_List.map((items, _index) => {
          return (
            <li
              key={`${_index}_`}
              className=" list-unstyled d-none d-lg-block px-1"
            >
              <Link
                to={`/${items}`}
                className=" text-white fw-light"
                style={{ fontSize: "0.8rem" }}
              >
                {items}
              </Link>
            </li>
          );
        })}
        <li className=" list-unstyled">
          <img src={search_logo} alt="" width={19} height={19} />
        </li>
        <li className=" list-unstyled">
          <img src={store_bag} alt="" width={19} height={19} />
        </li>
        <li
          className=" d-flex flex-column row-gap-2 z-1 d-lg-none"
          id="menubar"
          onClick={MenubarToggled}
        >
          <div
            className="upper_bar"
            id="upper_bar"
            style={{ width: "20px", height: "2px", backgroundColor: "white" }}
          ></div>
          <div
            id="lower_bar"
            style={{ width: "20px", height: "2px", backgroundColor: "white" }}
          ></div>
        </li>
      </ul>
      {mobMenuOpen && <MobileMenu func={MenubarToggled} />}
    </nav>
  );
}

export default NavigationBar;
