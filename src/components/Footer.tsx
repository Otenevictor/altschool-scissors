import Logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link as RounterLink } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <div className="container-fluid mt-5 blue_bg pt-4" >
        <div className="row g-2">
          <div className="col">
            <div className="p-3"></div>
          </div>
          <div className="col-2 p-2 logo_image">
            <Link className="ms-5" to="/">
              <img src={Logo} alt="logo" className="img-fluid " />
            </Link>
            <div className="p-2 m-3 d-flex justify-content-end">
              <RounterLink to="/" target="_blank" className="g-3">
                <Icon icon="mdi:twitter" width="25" />
              </RounterLink>
              <RounterLink to="/" target="_blank" className="g-3">
                <Icon icon="mdi:instagram" width="25" />
              </RounterLink>
              <RounterLink to="/" target="_blank" className="g-3">
                <Icon icon="mdi:linkedin" width="25" />
              </RounterLink>
              <RounterLink to="/" target="_blank" className="g-3">
                <Icon icon="ant-design:facebook-filled" width="25" />
              </RounterLink>
            </div>
          </div>
          <div className="col-2 container-fluid">
            <div className="p-0">
              <b>
                <p className="mb-3 ">Why Scissor ? </p>
              </b>
              <ul className="text-start p-0" style={{listStyleType: "none"}}>
              <li className="">Scissor 101</li>
              <li className="m-0 ">Integrations & API</li>
              <li>Pricing </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="mb-3 ">Solutions</p>
              </b>
              <ul className="text-start p-0" style={{listStyleType: "none"}}>
              <li >
                Social Media 
              </li>
              <li>Digital Marketing</li>
              <li>Customer Service</li>
              <li>  For Developers</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="mb-3 ">Products</p>
              </b>
              <ul className="text-start p-0" style={{listStyleType: "none"}}>
              <li >Link Management </li>
              <li> QR Codes</li>
              <li> Link-in-bio</li>
              </ul>

            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="mb-3 ">Company</p>
              </b>
              <ul className="text-start p-0" style={{listStyleType: "none"}}>
              <li className="m-0 ">
                About Scissor  
              </li>
              <li>Careers</li>
              <li>Partners </li>
              <li>Press </li>
              <li>Contact</li>
              <li> Reviews</li>

              </ul>
            </div>
          </div>
          <div className="col">
            <div className="p-0"></div>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-1">
            <div className="p-0"></div>
          </div>
          <div className="col-2"></div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="mb-3 ">Resources</p>
              </b>
              <ul className="text-start p-0" style={{listStyleType: "none"}}>
              <li className="m-0 ">
                Blog   
              </li>
              <li>Resource Library </li>
              <li>Developers</li>
              <li>App Connectors</li>
              <li>Support </li>
              <li>Trust Center </li>
              <li>Browser Extension </li>
              <li>Mobile App</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="mb-3 ">Features</p>
              </b>
              <ul className="text-start p-0"  style={{listStyleType: "none"}}>
              <li className="m-0">Branded Links </li>
              <li> Mobile Links</li>
              <li>Campaign </li>
              <li>Management & Analytics </li>
              <li>QR Code generation{" "}</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="mb-3 ">Legal</p>
              </b>
              <ul className="text-start p-0" style={{listStyleType: "none"}}>
              <li className="m-0 "> Privacy Policy </li>
              <li>Cookie Policy </li>
              <li>Terms of Service </li>
              <li>Acceptable Use Policy </li>
              <li>Code of Conduct</li>
              </ul>
            </div>
          </div>
          <div className="col-1">
            <div className="p-0"></div>
          </div>
          <div className="col">
            <div className="p-3"></div>
          </div>
        </div>
        <div className="container text-center mt-5 d-flex justify-content-end ">
        <div className="row g-2">
          <div className="col">
            <p className=" text-start">Term of Service | Security | ⓒ Scissor 2023</p>
          </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Footer;
