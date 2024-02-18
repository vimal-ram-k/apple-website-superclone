import { Link } from "react-router-dom";

const Notificationsection = () => {
  return (
    <div className=" bg-dark-subtle" style={{ height: "auto" }}>
      <p
        className=" container text-center my-0 p-2"
        style={{ width: "90%", fontSize: "0.7rem" }}
      >
        Save up to $8000.00 instantly on eligible products with HDFC Bank Credit
        Cards, <sup>*</sup> Plus No Cost EMI from most leading banks.{" "}
        <sup>*</sup>{" "}
        <Link className=" d-block" to={"/"}>
          Shop now
        </Link>
      </p>
    </div>
  );
};

export default Notificationsection;
