// import axios from "axios";
// import { useEffect, useState } from "react";


// const LinkResult = ( {inputValue}) => {
// console.log(inputValue);
//     const [shortenLink, setShortenLink] = useState("");
//     const [copied, setCopied] = useState(false);
//     const [loading, setLoading] = useState(false);

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue} `);
//         setShortenLink(res.data.result.full_short_link);
//       } catch (err) {
        
//       } finally {
//   };


// useEffect(() => {
// const timer = setTimeout(() => {
// setCopied(false);
// }, 1000);
// return ()  => clearTimeout(timer);
// }, [copied]);
// console.log(shortenLink);

// useEffect (() => {
//   if(inputValue.length) {
//     fetchData();

// }
// }


//   return (
//     <>
       
//     <div className="text-white h3">
//         <p>LinkResult</p>
//         </div>
//     <div className="row">
//     <div className="col">
//   <input
//     type="text"
//     placeholder="results of url."
//     className="m-4  me-5 md:w-50 lg:w-25 p-3  px-5 py-3 border border-primary rounded-3 text-primary "
//   />
//   </div>
//   </div>

//   </>
//   );
// }
//     }
  
    


// export default LinkResult;