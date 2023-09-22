import { Link } from "react-router-dom"
import Logo from "../assets/Images/Logo.png"
const Headers = () => {
  
  return (


<nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
  <div className="container-fluid">
    <Link className="navbar-brand ms-5" to="/"><img src= { Logo } alt="logo" className=" md:ml-40  w-20 "/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          < Link className="nav-link active" aria-current="page" to="#">My URLs</Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link text-dark " to="#">Features</Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link text-dark " to="#">Pricing</Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link text-dark " to="#"> Analytics</Link>
        </li>
        <li className="nav-item">
          < Link className="nav-link text-dark " to="#"> FAQs</Link>
        </li>
      </ul>
      <ul className="navbar-nav  ms-5 ml-5">
        <li className="nav-item">
          < Link className="nav-link active ms-5 text-dark " aria-current="page" to="/login">Log in</Link>
        </li>
        <li className="nav-item ms-5">
          < Link className="nav-link text-dark px-3 py-2 text-white bg-primary hover:bg-white hover:text-dark rounded-pill " to="/">Try for Free</Link>
        </li>
        <li className="nav-item ms-5">
          < Link className="nav-link text-dark  px-3 py-2 text-white bg-primary hover:bg-white hover:text-dark rounded-pill" to="/signup">Sign up</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>


    // <nav className="bg-gray-800">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <div className="flex-shrink-0">
    //         <Link to="/"> <img src= { Logo } alt="logo" className=" md:ml-40  w-20 "/> </Link>
    //         </div>
    //         <div className="hidden md:block">
    //           <div className="ml-10  flex items-baseline  space-x-4">
    //           <div className="mt-10 m-10">
    //             <Link to="/urls" className="m-6 text-blue-600 "> My URLs </Link>
    //             <Link to="/features" className="m-4 text-white"> Features </Link>
    //              <Link to="/pricing" className="m-4 text-white"> Pricing </Link>
    //              <Link to="/analytics" className="m-4 text-white"> Analytics </Link>
    //              <Link to="/faqs" className="m-4 text-white"> FAQs </Link>
    //              <Link to="/login" className="m-20 text-blue-700"> Login </Link>
    //             <Link to="/try" className="m-4 bg-blue-500 text-white py-3 px-4 
    //               border-none rounded-full hover:bg-white hover:border-blue-700
    //                hover:text-black"> Try for free </Link>
    //                </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="-mr-2 flex md:hidden">
    //         <button
    //           onClick={toggleMenu}
    //           type="button"
    //           className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
    //           aria-controls="mobile-menu"
    //           aria-expanded="false"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <svg
    //             className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //           <svg
    //             className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
    //     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    // <Link to="/urls" className="text-blue-600 hover:bg-gray-700 hover:text-white
    //  block px-3 py-2 rounded-md text-base font-medium"> My URLs </Link>

    // <Link to="/features" className="text-gray-300 hover:bg-gray-700 hover:text-white
    //  block px-3 py-2 rounded-md text-base font-medium"> Features </Link>

    // <Link to="/pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white
    //  block px-3 py-2 rounded-md text-base font-medium"> Pricing </Link>

    // <Link to="/analytics" className="text-gray-300 hover:bg-gray-700 hover:text-white
    //  block px-3 py-2 rounded-md text-base font-medium"> Analytics </Link>

    // <Link to="/faqs" className="text-gray-300 hover:bg-gray-700 hover:text-white
    //  block px-3 py-2 rounded-md text-base font-medium"> FAQs </Link>

    // <Link to="/login" className="text-blue-500 hover:bg-gray-700 hover:text-white
    //  block px-3 py-2 rounded-md text-base font-medium"> Login </Link>
    
    // <Link to="/try" className="text-gray-300 hover:bg-gray-700 hover:text-white
    //  block px-3 py-2 rounded-md text-base font-medium"> Try for free </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Headers;
