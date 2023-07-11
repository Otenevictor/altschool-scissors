import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

const UrlPage = () => {
  
    const navigate = useNavigate();

  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // const handleInputChange = (event: any) => {
  //   setLongUrl(event.target.value);
  // };

  const handleCancel = () => {
    navigate('/dashboard');
  }

  const submit: SubmitHandler<any> = async data => {
    if (!data) return;
    console.log(data);

    const apiKey = "d7c27503eb5b1521587c964adb834a75145376ef";
    const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

    const response = await axios.post(
      apiUrl,
      { long_url: data.longUrl },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    setLongUrl('')
    setShortUrl(response.data.link);
  };

  // console.log(longUrl);
     return ( 
        <div>
           <Link to="/dashboard">
           <svg fill="none" 
           className="w-10 h-10 text-blue-700 float-right mr-5"
           stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" 
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 
        2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path>
          </svg>
           </Link>
            <h1 className="mt-10 text-center text-4xl font-serif">Create new</h1>

            <form onSubmit={handleSubmit(submit)}>
                <div className="flex flex-col m-3">
                <label htmlFor="url" className="mt-20 text-center text-lg font-serif">
                    Enter your long URL
                </label>

                <input type="text" 
                className="mt-2 md:w-1/2 w-full mx-auto border-2  border-blue-700 rounded-lg p-3" 
                placeholder="https://www.example.com/my_long_url"
              
                {...register("longUrl")}
                />
                </div>    
         
            {/* {shortUrl} */}
       
      
                
            <div className="flex m-3  md:flex-row flex-col md:mt-80 mt mt-44 md:float-right">
            <button 
                className="border w-full border-slate-400 hover:bg-slate-300 text-blue-900 px-5 py-3 rounded-lg mr-10 font-serif" onClick={handleCancel}>
                    Cancel
                </button>

                <button type="submit"
                className="border mt-2 w-full bg-blue-500 hover:bg-blue-400 text-white px-5
                 py-3 mr-5 rounded-lg font-serif" >
                    Create
                </button>
            </div>   
            </form>

            <div>
            {shortUrl && (
        <div className="md:ml-96 ml-36 ">
          <p>Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer"
          className="underline text-purple-600 text-xl">
            {shortUrl}
          </a>
        </div>
      )}
            </div>

           
        </div>
     );
}
 
export default UrlPage;

/* Things to do
  1. Validation
  2. Toastify
  3. Loop into or navigate into a new page
  4. Finish up the UI of the project */


 
