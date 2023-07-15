import Logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link as RounterLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid text-center mt-5 blue_bg pt-4" >
        <div className="row g-2">
          <div className="col">
            <div className="p-3"></div>
          </div>
          <div className="col-2">
            <Link className="ms-5" to="/">
              <img src={Logo} alt="logo" className=" md:ml-40  w-20 " />
            </Link>
            <div className="p-2 m-3">
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
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="m-0">Why Scissor ? </p>
              </b>
              <p className="m-0">Scissor 101</p>
              <p className="m-0 fs-6">Integrations & API</p>
              <p>Pricing </p>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="m-0">Solutions</p>
              </b>
              <p className="m-0 fs-6">
                Social Media Digital Marketing Customer Service For Developers
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="m-0">Products</p>
              </b>
              <p className="m-0 fs-6">Link Management QR Codes Link-in-bio</p>
            </div>
          </div>
          <div className="col-1">
            <div className="p-0">
              <b>
                <p className="m-0">Company</p>
              </b>
              <p className="m-0 fs-6">
                About Scissor Careers Partners Press Contact Reviews
              </p>
            </div>
          </div>
          <div className="col">
            <div className="p-3"></div>
          </div>
        </div>
        <div className="row g-2">
          <div className="col">
            <div className="p-3"></div>
          </div>
          <div className="col-2"></div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="m-0">Resources</p>
              </b>
              <p className="m-0 fs-6">
                Blog Resource Library Developers App Connectors Support Trust
                Center Browser Extension Mobile App
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="m-0">Features</p>
              </b>
              <p className="m-0 fs-6">
                Branded Links Mobile Links Campaign Management & Analytics QR
                Code generation{" "}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="p-0">
              <b>
                <p className="m-0 ">Legal</p>
              </b>
              <p className="m-0 fs-6">
                Privacy Policy Cookie Policy Terms of Service Acceptable Use
                Policy Code of Conduct
              </p>
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
