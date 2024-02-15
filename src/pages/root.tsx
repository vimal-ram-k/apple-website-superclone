import React from "react";
import Notificationsection from "../components/notificationsection";
import watch_series9 from "../assets/heros/watch/hero_logo_apple_watch_series_9__eg5xcrxghuaa_small_2x.png";
import m2_ship_icon from "../assets/heros/macbookair/logo_promo_macbookair__hy9ktdqqtv2a_small_2x.png";
import tradein from "../assets/heros/iphonetradein/logo_tradein__d1fpktgipvki_small_2x.png";
import killerofmoon from "../assets/heros/apple-tv-flex/548x1186 (1).jpg";
import { Link } from "react-router-dom";
function Root() {
  return (
    <div>
      <Notificationsection />
      <section className="main_hero_iphone15">
        <h1 className=" text-white text-center fs-1 pt-5">iPhone 25 pro</h1>
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

      <section className="second_hero_macbookpro my-2 ">
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
      <section className="second_hero_ipad my-2 ">
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

      {/*  Airpods second banner  */}
      <section className="second_hero_airpods my-2 ">
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
      <section className="second_hero_homepod_mini my-2 ">
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

      {/*  macbookairm2 second banner  */}
      <section className="second_hero_macbookairm2 my-2  d-flex flex-column align-items-center">
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
      <section className="second_hero_tradein my-2  d-flex flex-column align-items-center row-gap-2">
        <img src={tradein} width={120} alt="" className=" pt-5" />
        <p className=" m-0 fs-5">upgrade and save. It;s that easy.</p>
        <div className=" d-flex column-gap-3 justify-content-center">
          <Link to={"/"} className=" text-decoration-none fw-light fs-6 ">
            See what your device is worth
          </Link>
        </div>
      </section>

      {/*  apple tv shows second banner  */}
      <div>
        <ul className=" d-flex overflow-scroll">
          <li className=" list-unstyled p-2">
            <img src={killerofmoon} width={280} height={500} alt="" />
          </li>
          <li className=" list-unstyled p-2">
            <img src={killerofmoon} width={280} height={500} alt="" />
          </li>
          <li className=" list-unstyled p-2">
            <img src={killerofmoon} width={280} height={500} alt="" />
          </li>
          <li className=" list-unstyled p-2">
            <img src={killerofmoon} width={280} height={500} alt="" />
          </li>

          <li className=" list-unstyled p-2">
            <img src={killerofmoon} width={280} height={500} alt="" />
          </li>
          <li className=" list-unstyled p-2">
            <img src={killerofmoon} width={280} height={500} alt="" />
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

      
    </div>
  );
}

export default Root;
