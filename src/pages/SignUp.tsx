import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import { useState } from "react";

const SignupPage = () => {
  // const [email, setEmail] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [retypePasswordVisible, setRetypePasswordVisible] = useState(false);
  const [retypePassword, setRetypePassword] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleToggleRetypePassword = () => {
    setRetypePasswordVisible(!retypePasswordVisible)
  };

  const handleChangePasswords = (event: any) => {
    setRetypePassword(event.target.value);
  }

  return (
    <>
    <Navbar />
      <div className="m-auto text-align-center d-flex justify-content-center ml-2">
        <div className="">
          <h2 className="font-serif text-2 md:mt-20 mt-2 md:ml-3   text-center">
            Sign Up  with:{" "}
          </h2>
          <button
            type="submit"
            className="bg-primary text-white py-3 px-4
            border mt-3 hover:bg-white hover:border-primary
             hover:text-black"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#fff"
                  d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"
                />
                <path
                  fill="#e33629"
                  d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"
                />
                <path
                  fill="#f8bd00"
                  d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"
                />
                <path
                  fill="#587dbd"
                  d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                />
                <path
                  fill="#319f43"
                  d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"
                />
              </svg>
            </span>
            Google
          </button>

          <button
            type="submit"
            className="bg-primary text-white py-3 px-5
            border m-2 hover:bg-white hover:border-primary
             hover:text-black"
          >
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32 "
              >
                <path
                  fill="white"
                  d="M20.844 2c-1.64 0-3.297.852-4.407 2.156v.032c-.789.98-1.644 2.527-1.375 4.312c-.128-.05-.136-.035-.28-.094c-.692-.281-1.548-.594-2.563-.594c-3.98 0-7 3.606-7 8.344c0 3.067 1.031 5.942 2.406 8.094c.688 1.078 1.469 1.965 2.281 2.625c.813.66 1.664 1.125 2.625 1.125c.961 0 1.68-.324 2.219-.563c.54-.238.957-.437 1.75-.437c.715 0 1.078.195 1.625.438c.547.242 1.293.562 2.281.562c1.07 0 1.98-.523 2.719-1.188c.738-.664 1.36-1.519 1.875-2.343c.516-.824.922-1.633 1.219-2.282c.148-.324.258-.593.343-.812c.086-.219.13-.281.188-.531l.188-.813l-.75-.343a5.33 5.33 0 0 1-1.5-1.063c-.625-.637-1.157-1.508-1.157-2.844A4.08 4.08 0 0 1 24.563 13c.265-.309.542-.563.75-.719c.105-.078.187-.117.25-.156c.062-.04.05-.027.156-.094l.843-.531l-.562-.844c-1.633-2.511-4.246-2.844-5.281-2.844c-.48 0-.82.168-1.25.25c.242-.226.554-.367.75-.624c.004-.004-.004-.028 0-.032c.011-.011.023-.02.031-.031h.031a6.16 6.16 0 0 0 1.563-4.438L21.78 2zm-1.188 2.313c-.172.66-.453 1.289-.906 1.78l-.063.063c-.382.516-.972.899-1.562 1.125c.164-.652.45-1.312.844-1.812c.008-.012.023-.02.031-.032c.438-.5 1.043-.875 1.656-1.125zm-7.437 5.5c.558 0 1.172.21 1.812.468c.64.258 1.239.594 2.094.594c.852 0 1.496-.336 2.25-.594c.754-.258 1.559-.469 2.344-.469c.523 0 1.816.333 2.906 1.344c-.191.172-.36.297-.563.531a6.21 6.21 0 0 0-1.53 4.094c0 1.906.831 3.34 1.718 4.25c.55.563.89.696 1.313.938c-.055.125-.086.222-.157.375a18.82 18.82 0 0 1-1.093 2.062c-.454.727-1.004 1.434-1.532 1.907c-.527.472-1 .687-1.375.687c-.566 0-.898-.156-1.468-.406S17.581 25 16.5 25c-1.137 0-1.977.336-2.563.594c-.585.258-.89.406-1.406.406c-.246 0-.777-.2-1.375-.688c-.597-.488-1.254-1.23-1.844-2.156c-1.183-1.851-2.093-4.394-2.093-7c0-3.941 2.199-6.343 5-6.343z"
                />
              </svg>
            </span>
            Apple
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center m-3">
        <hr /> <p className="h4 text-primary">or</p>
        <hr />
      </div>

      <div className=" d-flex justify-content-center">
        <form className="col-6">
          <input
            placeholder="Email address"
            className=" form-control w-full mb-3 border-primary rounded-xl text-primary text-sm"
          />
          <div className="input-group mb-3">
            <input
              className="form-control border-primary   border border-end-0"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={handleChangePassword}
              placeholder="Password"
              aria-describedby="basic-addon2"
            />
            <span
              className="input-group-text bg-white border-primary  border border-start-0"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                onClick={handleTogglePassword}
              >
                <path
                  fill="blue"
                  d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
                />
              </svg>
            </span>
          </div>
          <div className="input-group mb-3">
            <input
              className="form-control border-primary   border border-end-0"
              type={retypePasswordVisible ? "text" : "password"}
              value={retypePassword}
              onChange={handleChangePasswords}
              placeholder="Confirm_password"
              aria-describedby="basic-addon2"
            />
            <span
              className="input-group-text bg-white border-primary  border border-start-0"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                onClick={handleToggleRetypePassword }
              >
                <path
                  fill="blue"
                  d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"
                />
              </svg>
            </span>
          </div>
          <div className="d-flex justify-content-end mt-0">
            <Link to="/signup" className=" text-primary mt-0">
              Forgot your password?
            </Link>{" "}
          </div>
          <br />
          <button className="mt-0 form-control  cursor-pointer border text-white bg-primary rounded-pill">
            {" "}
            Sign Up
          </button>
        </form>
      </div>

      <p className="text-center md:text-lg text-sm m-3">
        Don't have an account?
        <Link to="/login" className="text-primary md:text-lg ml-3 text-base">
          Login
        </Link>
      </p>

      <p className="text-center m-4 md:text-base text-sm text-slate-600">
        By signing in with an account, you agree to <br />
        Scissor's <b>Terms of Service</b>, <b>Privacy Policy</b> and
        <b> Acceptable Use Policy</b>.
      </p>
    </>
  );
};
export default SignupPage;

// <div>
// <form>
//   <div className="mb-3">
//     <input type="email" className="form-control" id="exampleInputEmail1" placeholder="" aria-describedby="emailHelp"/>
//   </div>
//   <div className="mb-3">
//     <input type="password" className="form-control" placeholder="" id="exampleInputPassword1"/>
//   </div>
//   <button type="submit"  className="btn btn-primary">Submit</button>
// </form>
// </div>
// </>
