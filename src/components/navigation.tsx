import React from "react";
import apple_logo from "../assets/logos/apple-logo.svg";
import search_logo from "../assets/logos/search-datk.svg";
import store_bag from "../assets/logos/bag-light.svg";

function NavigationBar() {
  return (
    <nav
      className=" container bg-black d-flex align-items-center justify-content-between"
      style={{ height: "60px" }}
    >
      <div>
        <img src={apple_logo} alt="" width={23} height={23} />
      </div>
      <ul className=" d-flex align-items-center  column-gap-4 p-0 m-0">
        <li>
          <img src={search_logo} alt="" width={23} height={23} />
        </li>
        <li>
          <img src={store_bag} alt="" width={23} height={23} />
        </li>
        <li className=" d-flex flex-column row-gap-2">
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
    </nav>
  );
}

export default NavigationBar;
