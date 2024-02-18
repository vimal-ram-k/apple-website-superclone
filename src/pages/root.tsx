import Notificationsection from "../components/notificationsection";
import watch_series9 from "../assets/heros/watch/hero_logo_apple_watch_series_9__eg5xcrxghuaa_small_2x.png";
import m2_ship_icon from "../assets/heros/macbookair/logo_promo_macbookair__hy9ktdqqtv2a_small_2x.png";
import tradein from "../assets/heros/iphonetradein/logo_tradein__d1fpktgipvki_small_2x.png";

import appletv1 from "../assets/heros/apple-tv-flex/548x1186.jpg";
import appletv3 from "../assets/heros/apple-tv-flex/548x1186 (1).jpg";
import appletv2 from "../assets/heros/apple-tv-flex/548x1186 (2).jpg";
import appletv4 from "../assets/heros/apple-tv-flex/548x1186 (3).jpg";
import appletv5 from "../assets/heros/apple-tv-flex/548x1186 (4).jpg";
import appletv6 from "../assets/heros/apple-tv-flex/548x1186 (5).jpg";
import appletv7 from "../assets/heros/apple-tv-flex/548x1186 (6).jpg";

import down_arrow from "../assets/icons/arrow-down-3101.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const footer_links = [
  "Shop and Learn",
  "Apple Wallet",
  "Account",
  "Entertainment",
  "Apple Store",
  "For Bussiness",
  "For Education",
  "For Healthcare",
  "Apple Values",
  " About Apple",
];

const shopandlearn = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "AirTag",
  "Accessories",
  "Gift Cards",
];

setInterval(() => {
  const appletv_flex = document.getElementById("appletv-flex");
  let currentLeft = appletv_flex?.scrollLeft;

  if (currentLeft !== undefined && appletv_flex) {
    if (currentLeft > 1500) {
      currentLeft = 230;
    }
    appletv_flex.scrollTo({
      left: currentLeft + 280,
      behavior: "smooth",
    });
  }
}, 4000);

function Root() {
  useEffect(() => {
    const appletv_flex = document.getElementById("appletv-flex");
    const currentLeft = appletv_flex?.scrollLeft;
    if (currentLeft !== undefined && appletv_flex) {
      appletv_flex.scrollTo({
        left: currentLeft + 230,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="">
      <Notificationsection />
      <section className="main_hero_iphone15">
        <h1 className=" text-white text-center fs-1 pt-5">iPhone 15 pro</h1>
        <h3 className=" text-white fw-lighter text-center fs-5">
          Titanium. So strong. So light. So Pro.
        </h3>
        <div className=" d-flex column-gap-3 justify-content-center">
          <Link to={"/"} className=" text-decoration-none fw-light fs-5 ">
            Learn more
          </Link>
          <Link to={"/"} className=" text-decoration-none fw-light fs-5 ">
            Buy
          </Link>
        </div>
      </section>
      {/* Iphone 15 second banner  */}

      <section className="second_hero_iphone15 my-2">
        <h1 className=" text-black text-center fs-1 pt-5">iPhone 15</h1>
        <h3 className=" text-black fw-lighter text-center fs-5">
          new camera. New design. Newphoria.
        </h3>
        <div className=" d-flex column-gap-3 justify-content-center">
          <Link to={"/"} className=" text-decoration-none fw-light fs-5 ">
            Learn more
          </Link>
          <Link to={"/"} className=" text-decoration-none fw-light fs-5 ">
            Buy
          </Link>
        </div>
      </section>

      {/* Watch series 9 second banner  */}
      <section className="second_hero_watch my-2 position-relative">
        <div
          className=" w-100 d-flex flex-column align-items-center position-absolute"
          style={{ top: "65%" }}
        >
          <img src={watch_series9} width={120} alt="" className="" />
          <p
            className=" text-white text-center fs-4 fw-lighter"
            style={{ width: "60vw" }}
          >
            Double tab. A magical new way to use Apple Watch.
          </p>
          <div className=" d-flex column-gap-3 justify-content-center">
            <Link to={"/"} className=" text-decoration-none fw-light fs-5 ">
              Learn more
            </Link>
            <Link to={"/"} className=" text-decoration-none fw-light fs-5 ">
              Buy
            </Link>
          </div>
        </div>
      </section>

      {/* Macbook Pro second banner  */}
      <div className=" d-lg-grid">
        <div className=" row m-0">
          <section className="second_hero_macbookpro my-2 col-lg-6 ">
            <h1 className=" text-center pt-4 m-0">MacBook Pro</h1>
            <p className=" text-black text-center fs-4  fw-light m-1">
              Mind-blowing. Head-turning.
            </p>
            <div className=" d-flex column-gap-3 justify-content-center">
              <Link to={"/"} className=" text-decoration-none fw-light fs-6 ">
                Learn more
              </Link>
              <Link to={"/"} className=" text-decoration-none fw-light fs-6">
                Buy
              </Link>
            </div>
          </section>

          {/*  iPad second banner  */}
          <section className="second_hero_ipad my-2  col-lg-6 ">
            <h1 className=" text-center pt-5">iPad</h1>
            <p className=" text-black text-center fs-4  fw-light m-1">
              Lovable. Drawable. Magical.
            </p>
            <div className=" d-flex column-gap-3 justify-content-center">
              <Link to={"/"} className=" text-decoration-none fw-light fs-6 ">
                Learn more
              </Link>
              <Link to={"/"} className=" text-decoration-none fw-light fs-6">
                Buy
              </Link>
            </div>
          </section>
        </div>

        {/*  Airpods second banner  */}
        <div className="row m-0">
          <section className="second_hero_airpods my-2 col-lg-6  ">
            <h1 className=" text-white text-center pt-5">AirPods Pro</h1>
            <p className=" text-white text-center fs-4  fw-light m-1">
              Adaptive Audio. Now playing.
            </p>
            <div className=" d-flex column-gap-3 justify-content-center">
              <Link to={"/"} className=" text-decoration-none fw-light fs-6 ">
                Learn more
              </Link>
              <Link to={"/"} className=" text-decoration-none fw-light fs-6">
                Buy
              </Link>
            </div>
          </section>

          {/*  homepodmini second banner  */}
          <section className="second_hero_homepod_mini my-2 col-lg-6 ">
            <h1 className=" text-black fs-1 text-center pt-5">HomePod mini</h1>

            <div className=" d-flex column-gap-3 justify-content-center">
              <Link to={"/"} className=" text-decoration-none fw-light fs-6 ">
                Learn more
              </Link>
              <Link to={"/"} className=" text-decoration-none fw-light fs-6">
                Buy
              </Link>
            </div>
          </section>
        </div>

        {/*  macbookairm2 second banner  */}
        <div className="row m-0">
          <section className="second_hero_macbookairm2 my-2  d-flex flex-column align-items-center col-lg-6 ">
            <h1 className=" text-black fs-1 text-center pt-5">MacBook Air</h1>
            <img src={m2_ship_icon} width={180} alt="" />
            <div className=" d-flex column-gap-3 justify-content-center">
              <Link to={"/"} className=" text-decoration-none fw-light fs-6 ">
                Learn more
              </Link>
              <Link to={"/"} className=" text-decoration-none fw-light fs-6">
                Buy
              </Link>
            </div>
          </section>

          {/*  tradein second banner  */}
          <section className="second_hero_tradein my-2  d-flex flex-column align-items-center row-gap-2 col-lg-6 ">
            <img src={tradein} width={120} alt="" className=" pt-5" />
            <p className=" m-0 fs-5">upgrade and save. It;s that easy.</p>
            <div className=" d-flex column-gap-3 justify-content-center">
              <Link to={"/"} className=" text-decoration-none fw-light fs-6 ">
                See what your device is worth
              </Link>
            </div>
          </section>
        </div>
      </div>
      {/*  apple tv shows second banner  */}
      <div>
        <ul className=" d-flex overflow-scroll" id="appletv-flex">
          <li key={"appletv1"} className=" list-unstyled p-2">
            <img
              srcSet=""
              src={appletv1}
              className="appletv-flex"
              width={260}
              height={500}
              alt=""
            />
          </li>
          <li key={"appletv2"} className=" list-unstyled p-2">
            <img
              src={appletv2}
              className="appletv-flex"
              width={260}
              height={500}
              alt=""
            />
          </li>
          <li key={"appletv3"} className=" list-unstyled p-2">
            <img
              src={appletv3}
              className="appletv-flex"
              width={260}
              height={500}
              alt=""
            />
          </li>
          <li key={"appletv4"} className=" list-unstyled p-2">
            <img
              src={appletv4}
              className="appletv-flex"
              width={260}
              height={500}
              alt=""
            />
          </li>
          <li key={"appletv5"} className=" list-unstyled p-2">
            <img
              src={appletv5}
              className="appletv-flex"
              width={260}
              height={500}
              alt=""
            />
          </li>
          <li key={"appletv6"} className=" list-unstyled p-2">
            <img
              src={appletv6}
              className="appletv-flex"
              width={260}
              height={500}
              alt=""
            />
          </li>
          <li key={"appletv7"} className=" list-unstyled p-2">
            <img
              src={appletv7}
              className="appletv-flex"
              width={260}
              height={500}
              alt=""
            />
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li className=" list-unstyled ">
            <p className=" fw-light" style={{ fontSize: "0.8rem" }}>
              <sup>*</sup> Instant savings, otherwise referred to as instant
              cashback, is available with the purchase of an eligible product
              for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards
              only. Minimum transaction value of ₹10001.00 applies. Click here
              to see instant savings amounts and eligible devices. Instant
              savings is available for up to two orders per rolling 90-day
              period with an eligible card. Card eligibility is subject to terms
              and conditions between you and your card-issuing bank. Total
              transaction value is calculated after any trade-in credit or
              eligible discount applied. Any subsequent order adjustment(s) or
              cancellation(s) may result in instant savings being recalculated,
              and any refund may be adjusted to account for instant savings
              clawback; this may result in no refund being made to you. Offer
              may be revised or withdrawn at any time without any prior notice.
              Additional terms apply. Offer cannot be combined with Apple Store
              for Education or Corporate Employee Purchase Plan pricing.
              Multiple separate orders cannot be combined for instant savings.
            </p>
          </li>

          <li className=" list-unstyled ">
            <p className=" fw-light" style={{ fontSize: "0.8rem" }}>
              ‡No Cost EMI is available with the purchase of an eligible product
              made using eligible cards on 3- or 6-month tenures from most
              leading banks. Monthly pricing is rounded to the nearest rupee.
              Exact pricing will be provided by your bank, subject to your
              bank’s terms and conditions. Minimum order spend applies as per
              your card-issuing bank threshold. Offer cannot be combined with
              Apple Store for Education or Corporate Employee Purchase Plan
              pricing. Card eligibility is subject to terms and conditions
              between you and your card-issuing bank. Offer may be revised or
              withdrawn at any time without any prior notice. Additional terms
              apply.
            </p>
          </li>

          <li className=" list-unstyled ">
            <p className=" fw-light" style={{ fontSize: "0.8rem" }}>
              Representative example: Based on a 6-month tenure. ₹79900.00 total
              cost includes 15% p.a. and No Cost EMI savings of ₹3380.00, paid
              over 6 months as six monthly payments of ₹13317.00.
            </p>
          </li>

          <li className=" list-unstyled ">
            <p className=" fw-light" style={{ fontSize: "0.8rem" }}>
              A subscription is required for Apple TV+.
            </p>
          </li>
        </ul>
      </div>

      <footer>
        <div>
          <ul className=" container-fluid">
            {footer_links.map((items, _index) => {
              return (
                <div
                  className="d-flex justify-content-between border-bottom "
                  id={items}
                  onClick={footerLinkExpand}
                >
                  <li
                    className=" list-unstyled fw-light  p-2 "
                    style={{ fontSize: "0.8rem" }}
                    id={items + "_"}
                    key={_index}
                  >
                    {items}
                  </li>
                  <div className="" style={{ height: "20px" }}>
                    <img
                      id={`${items}` + "arrow"}
                      src={down_arrow}
                      width={10}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </ul>
          <div className=" container">
            <p className="fw-light m-0" style={{ fontSize: "0.7rem" }}>
              More ways to shop: <Link to={"/"}>Find an Apple Store</Link> or{" "}
              <Link to={"/"}>other retailer</Link> near you.
            </p>
            <p className="fw-light m-0" style={{ fontSize: "0.7rem" }}>
              Or call 000800 040 1966.
            </p>

            <h1 className=" fw-light mt-3" style={{ fontSize: "0.8rem" }}>
              India
            </h1>
            <h1 className=" fw-lighter " style={{ fontSize: "0.7rem" }}>
              Copyright @ 2024 Apple Inc. All rights reseved.
            </h1>

            <ul className=" d-flex p-0 m-0 column-gap-2 mb-3">
              <li
                className=" list-unstyled fw-light pe-2"
                style={{ fontSize: "0.7rem", borderRight: "1px solid gray" }}
              >
                Privacy Policy
              </li>
              <li
                className=" list-unstyled fw-light pe-2"
                style={{ fontSize: "0.7rem", borderRight: "1px solid gray" }}
              >
                Terms of Use
              </li>

              <li
                className=" list-unstyled fw-light pe-2"
                style={{ fontSize: "0.7rem", borderRight: "1px solid gray" }}
              >
                Sales policy
              </li>

              <li
                className=" list-unstyled fw-light pe-2"
                style={{ fontSize: "0.7rem", borderRight: "1px solid gray" }}
              >
                Legal
              </li>

              <li
                className=" list-unstyled fw-light pe-2"
                style={{ fontSize: "0.7rem" }}
              >
                Site Map
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Root;

function footerLinkExpand(id: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  const listExpand = document.getElementById(`${id.currentTarget.id}` + "_");
  const ulTtems = document.createElement("ul");
  const arrow = document.getElementById(`${id.currentTarget.id}` + "arrow");
  let listItem;
  let LinkAdd;
  if (!listExpand?.classList.contains("active")) {
    listExpand?.classList.add("active");

    if (arrow) {
      arrow.style.transform = "rotate(180deg)";
    }

    ulTtems.classList.add("footer_expand_ul");

    {
      shopandlearn.map((items) => {
        listItem = document.createElement("li");
        LinkAdd = document.createElement("a");
        listItem.classList.add("footer_list");
        LinkAdd.textContent = items;
        LinkAdd.href = `/${items}`;
        listItem.appendChild(LinkAdd);
        ulTtems.appendChild(listItem);
        listExpand?.appendChild(ulTtems);
      });
    }
  } else {
    listExpand?.classList.remove("active");
    console.log("DOne");
    if (ulTtems) {
      listExpand.removeChild(ulTtems);
    }
    if (arrow) {
      arrow.style.transform = "rotate(0deg)"; // Reset rotation
    }
  }
}
