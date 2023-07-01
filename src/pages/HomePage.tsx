import { Link } from "react-router-dom";
import box from "../assets/Images/box.png";
import ellipse from "../assets/Images/ellipse.png";
import desktop from "../assets/Images/desktop.png";
import basic from "../assets/Images/basic.png";
import professional from "../assets/Images/professional.png";
import teams from "../assets/Images/teams.png";
import Button from "../assets/Images/Button.png";
import Navbar from "../components/NavBar";
import stripe from "../assets/Images/stripe.png";
const HomePage = () => {
  return (
    <div>
      <Navbar/>

      <div className="row">
        <div className="col">
          <p className="text-center display-5 fw-semibold font-serif ">
            Optimize Your Online Experience with Our <br />
            Advanced <span className="text-primary"> URL Shortening </span>
            Solution.
          </p>
          <div className="d-flex justify-content-center">
            <div>
              <img src={stripe} alt="stripe" className=" m-auto  " />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center fw-semibold font-serif ">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom <br />
          slugs, branded links, and domain customization options to reinforce
          your brand <br />
          presence and enhance user engagement.
        </p>

        <div className=" col text-center  mt-10 ">
          <Link
            to="/signup"
            className=" font-serif  btn-primary text-white btn border border-none rounded-pill"
          >
            {" "}
            Sign Up{" "}
          </Link>

          <Link to="/learnmore" className=" ms-3 font-serif text-primary">
            Learn More
          </Link>
        </div>

        <div className="d-flex justify-content-center mt-20">
          <div className=" mt-5">
            <img src={box} alt="box" className=" " />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-20">
        <div className=" ">
            <img src={ellipse} alt="ellipse" className="" />
          </div>
          </div>

        <div className="mt-10">
          <img src={desktop} alt="desktop" className="img-fluid" />
        </div>

        <div>
          <p className="text-center display-5 font-serif">
            A <span className="text-primary  ft-bold">price perfect</span> for your
            needs.
          </p>

          <p className="text-center font-serif text-lg mt-3 m-5">
            From catering for your personal, business, event, socials needs, you
            can be <br /> rest assured we have you in mind in our pricing.
          </p>
        </div>

        <div className="ms-3 md:mt-20 mt-10 md:ml-44 text-center justify-content-center">
          <img src={basic} alt="basic" className=" md:h-96 md:w-72 img-fluid" />
          <img
            src={professional}
            alt="professional"
            className=" md:h-96 md:w-72 img-fluid "
          />
          <img src={teams} alt="teams" className=" md:h-96 md:w-72 img-fluid  " />
        </div>

        <div className="  text-center justify-content-center  mt-5 ml-4 md:ml-96">
          <Link
            to="/custom"
            className="btn md:m-10 text-primary border     border-primary  rounded-pill"
          >
            {" "}
            Get Custom pricing{" "}
          </Link>

          <Link
            to="/select"
            className=" btn m-4 bg-primary text-white
                 py-3 px-5 border border-none rounded-pill"
          >
            {" "}
            Select Pricing{" "}
          </Link>
        </div>

        <div className="mt-5 bg-secondary ">
          <div className=" text-center justify-content-center mt-8">
            <form className="">
              <div className="m-10">
                <input
                  type="text"
                  placeholder="Paste URL here..."
                  className="mt-20 w-full max-w-md md:ml-96  px-5 py-3 border
                             border-primary rounded-4 text-primary
                            "
                />
                <div className="md:mt-8 mt-3">
                  <select
                    placeholder="Customize domain"
                    className="md:ml-96 py-3 md:m-3 m-1 md:px-5  px-5 border text-primary border-primary rounded-pill  "
                  >
                    <option value="">Customize domain</option>
                    <option value="">Scissors</option>
                    <option value="">Bitly</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Type Alias here"
                    className="py-3 border md:px-3 px-5 text-primary border-primary rounded-4"
                  />
                </div>
                <Link to="/login">
                  {" "}
                  <img
                    src={Button}
                    alt="button"
                    className="md:ml-96 w-full max-w-md mt-5 "
                  />{" "}
                </Link>

                <p className="text-center mt-10">
                  By clicking TrimURL, I agree to the
                  <b> Terms of Service</b>, <b>Privacy Policy</b> and Use of
                  Cookies.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
