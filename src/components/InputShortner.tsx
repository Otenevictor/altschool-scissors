// import { useState } from "react"
// import { Link } from "react-router-dom"


// const InputShortner = ({setInputValue}) => {
//     const [value, setValue] = useState("");
//     const handleClick = () => {
//         setInputValue(value);
//         setValue("");
//     }
//   return (
//     <>
//     <div className="mt-5 bg-secondary form_bg h-70  max-:w-80 ">
//     <div className=" text-center  justify-content-center  mt-8">
//     <div className="text-center text-white h1 p-3 justify-content-center">inputShortner</div>

//       <form className=" ">
//         <div className="m-10 p-4">
//           <input
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//             type="text"
//             placeholder="Paste URL here..."
//             className="mt-20 md:ml-96  px-5 py-3 border
//                        border-primary rounded-4 text-primary
//                       "
//           />

//           <Link to="/login" className="m-3 ">
//             <button onClick={handleClick} type="button" className="btn btn-primary btn mt-4 ms-4">
//               TrimURL
//             </button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   </div>
// </>
//   )
// }

// export default InputShortner