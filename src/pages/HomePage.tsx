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
import "../assets/css/home.css";
const HomePage = () => {
  return (
    <div>
      <Navbar />

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
            A <span className="text-primary  ft-bold">price perfect</span> for
            your needs.
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
          <img
            src={teams}
            alt="teams"
            className=" md:h-96 md:w-72 img-fluid  "
          />
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

        <div className="mt-5 bg-secondary form_bg h-50 ">
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
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="m-4 p-5">
        <div className="accordion" id="myAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                1. How does url shorting works?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#myAccordion"
            >
              <div className="card-body">
                <p>
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected
                  to the intended destination.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                type="button"
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                2. Is it necessary to create an account to use the URL
                shortening service??
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              data-bs-parent="#myAccordion"
            >
              <div className="card-body">
                <p>loading</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                3. Are the shortened links permanent? Will they expire?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#myAccordion"
            >
              <div className="card-body">
                <p>loading</p>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  4. Are there any limitations on the number of URLs I can
                  shorten?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="card-body">
                  <p>loading</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  5 Can I customize the shortened URLs to reflect my brand or
                  content?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="card-body">
                  <p>loading</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  6 Can I track the performance of my shortened URLs?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="card-body">
                  <p>loading</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                >
                  7. How secure is the URL shortening service? Are the shortened
                  links protected against spam or malicious activity?{" "}
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="card-body">
                  <p>loading</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                >
                  8. What is a QR code and what can it do?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="card-body">
                  <p>loading</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  type="button"
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                >
                  9. Is there an API available for integrating the URL
                  shortening service into my own applications or websites?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse show"
                data-bs-parent="#myAccordion"
              >
                <div className="card-body">
                  <p>loading</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-2 mb-3 bg-secondary form_bg mw-50 ">
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
                </div>
                </form>
                </div>
                </div>

                <div>
        <p className="text-center mt-10">
          By clicking TrimURL, I agree to the
          <b> Terms of Service</b>, <b>Privacy Policy</b> and Use of Cookies.
        </p>
      </div>

    </div>
  );
};

export default HomePage;
