import { Link } from "react-router-dom";
import box from "../assets/Images/box.png";
import ellipse from "../assets/Images/ellipse.png";
import desktop from "../assets/Images/desktop.png";
import basic from "../assets/Images/basic.png";
import professional from "../assets/Images/professional.png";
import teams from "../assets/Images/teams.png";
// import Button from "../assets/Images/Button.png";
import Navbar from "../components/NavBar";
import stripe from "../assets/Images/stripe.png";
import "../assets/css/home.css";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";


const HomePage = () => {
  return (
    <>
    <div>
      <Navbar />

      <div className="row">
        <div className="col">
          <p className="text-center display-5 m-3 fw-semibold font-serif ">
            Optimize Your Online Experience with Our <br />
            Advanced <span className="text-primary"> URL Shortening </span>
            Solution.
          </p>
          <div className="d-flex justify-content-center">
            <div>
              <img src={stripe} alt="stripe" className=" m-auto " />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center fw-semibold m-3 font-serif ">
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
            <img src={box} alt="box" className="img-fluid" />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-20">
          <div className=" ">
            <img src={ellipse} alt="ellipse" className="img-fluid" />
          </div>
        </div>

        <div className="mt-10">
          <img src={desktop} alt="desktop" className="img-fluid" />
        </div>

        <div>
          <p className="text-center display-5 font-serif">
            A <span className="text-primary  ft-bold">price perfect</span> for
            your needs.
          </p>

          <p className="text-center font-serif text-lg mt-3 m-5">
            From catering for your personal, business, event, socials needs, you
            can be <br /> rest assured we have you in mind in our pricing.
          </p>
        </div>

        <div className="ms-1 text-center d-flex g-2">
          <div className="">
          <img src={basic} alt="basic" className=" w-30 img-fluid" /></div>
          <div className=""> <img
            src={professional}
            alt="professional"
            className="  img-fluid "
          /></div>
         <div className=""> <img
            src={teams}
            alt="teams"
            className="  w-30 img-fluid  "
          /></div>
        </div>

        <div className=" mt-2 mb-3 text-center justify-content-center  mt-5 ml-4 md:ml-96">
          <Link
            to="/custom"
            className="btn md:m-10 text-primary border     border-primary  rounded-pill"
          >
            {" "}
            Get Custom pricing{" "}
          </Link>

          <Link
            to="/select"
            className=" btn m-4 bg-primary text-white mt-2 mb-3
                 py-3 px-5 border border-none rounded-pill"
          >
            {" "}
            Select Pricing{" "}
          </Link>
        </div>

        <div className="mt-5 bg-secondary form_bg h-70  max-:w-80 ">
          <div className=" text-center  justify-content-center  mt-8">
            <form className=" ">
              <div className="m-10 p-4">
                <input
                  type="text"
                  placeholder="Paste URL here..."
                  className="mt-20 md:ml-96  px-5 py-3 border
                             border-primary rounded-4 text-primary
                            "
                />

                <Link to="/login" className="m-3 ">
                  <button type="button" className="btn btn-primary btn mt-4 ms-4">
                    TrimURL
                  </button>
                </Link>
                <div className="row">
                  <div className="col">
                <input
                  type="text"
                  placeholder="result of url."
                  className="mt-4  me-5 md:w-50 lg:w-25 p-3  px-5 py-3 border border-primary rounded-3 text-primary "
                />
                </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        < Accordion />
      </div>
      <div className="mt-2 mb-3 bg-secondary form_bg mw-50 ">
        <div className=" text-center justify-content-center mt-8">
          <div className=" col text-center  mt-10 ">
            <h2 className="text-white mt-4 pt-5">
              Revolutionizing Link Optimization
            </h2>
            <Link
              to="/signup "
              className=" mb-5 mt-4 font-serif  btn-primary text-white btn border border-none rounded-pill"
            >
              {" "}
              get started{" "}
            </Link>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center mt-10">
          By clicking TrimURL, I agree to the
          <b> Terms of Service</b>, <b>Privacy Policy</b> and Use of Cookies.
        </p>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default HomePage;
