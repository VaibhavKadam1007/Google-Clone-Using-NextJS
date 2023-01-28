import Image from "next/image";
import img from './gle.png';
import pic from './art.jpg'
import {useRouter} from "next/router";
import {useRef} from "react";
import {XIcon, MicrophoneIcon,SearchIcon} from  '@heroicons/react/solid'
import Avatar from "./Avatar";
import Headeroptions from './Headeroptions';
function Header(){
  const router=useRouter();  
  const searchInputRef=useRef(null);
  const search=(e)=>{
      e.preventDefault();
      const term=searchInputRef.current.value;

      if (!term) return;
      router.push(`/search?term=${term}`);
  }
  return(
    <header className="stickey top-0 bg-white">
        <div className="flex width-full p-6 items-center">
          <Image
         src={img}
         height={40}
         width={120}
         onClick={()=>router.push("/") }
        
       />
      <form className="flex px-6 py-3 mr-3 ml-10 border border-gray-200 
      rounded-full flex-grow items-center max-3-3xl
      ">
         <input ref={searchInputRef} className="flex-grow w-full
         focus:outline-none
         " type="text"/>
        <XIcon className="h-7 sm:mr-3 text-gray-500 transition
        duration-100 transform hover:scale-125
        "
        onClick={()=>{searchInputRef.current.value=" "}}
        />
        <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex border-l-2 border-gray-300 text-blue-500"/>
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex border-l-2 border-gray-300" />
         <button hidden type="submit" onClick={search} >Search</button>  
         </form>
        <Avatar className="ml-auto" url="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/jumbotron.jpg" />
        </div>
       {/* headeroptions */}
       <Headeroptions/>

    </header>
    

  )}

  export default Header;