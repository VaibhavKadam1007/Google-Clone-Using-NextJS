import Headeroption from "./Headeroption";
import {
DotsVerticalIcon,
NewspaperIcon,
PhotographIcon,
PlayIcon,
SearchIcon,

} from '@heroicons/react/outline'
import { MapIcon } from "@heroicons/react/solid";



function Headeroptions(){
  return (
    <div className="flex 2-full text-gray-700 justify-evenly text-sm lg:justify-start lg:space-x-36 border-b-[1px]">
       <div className="flex space-x-6">
        <Headeroption Icon={SearchIcon}
          title="All" selected/>
        <Headeroption Icon={PhotographIcon}
         title="Images"/> 
         <Headeroption Icon={PlayIcon} 
         title="vidoes"/> 
         <Headeroption Icon={MapIcon}
         title="map"/> 
         <Headeroption Icon={DotsVerticalIcon}
         title="More"/>
       </div>
        <div className="flex space-x-4">
          <p className="link">Setting</p>
          <p className="link">tools</p>
        </div>
    </div>


  )

}
export default Headeroptions;