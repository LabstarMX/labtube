import useMediaQuery from "@/hooks/useMediaQuery"
// import { SelectedPage } from "@/shared/types"
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import VidCard from "@/shared/VidCard";
// import logo from "./assets/logo.svg";



type Props = {
    // setSelectedPage: (value: SelectedPage) => void;
    // dataType: string; //ADDED BY LABSTAR
    // formatName: string;
}





const Home = ({  }: Props) => {
  const [urlValue, setUrlValue] = useState("");
  const [data, setData] = useState<AxiosResponse | null >(null);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const inputBox = document.querySelector(".user-input");
  const handleDownload = async () => {
    const data = await axios.get(
      `http://localhost:4000/download?url=${urlValue}`
    );
    // console.log("🚀 ~ file: index.tsx:29 ~ handleDownload ~ data:", data)
    
    setData(data);
    setUrlValue("");
  };

  function handleKeypress(event: any) {
    event.keyCode === 13 ? handleDownload() : null;
    console.log("enter key pressed");
  }
  inputBox?.addEventListener('keypress', handleKeypress);
  return (
    <section id="home"  
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-300 to-blue-500
                      px-5 py-20"   
    > { isAboveMediumScreens 
    ? (
      <div className="flex flex-col items-center
            justify-center h-full w-full ">

        <div className="text-center font-montserrat text-[3.3rem] mb-9 flex 
        items-center justify-center gap-4 ">
          <div className="text-center w-[5rem] h-[5rem] bg-black rounded-full text-white
                    flex items-center justify-center font-bold text-5xl
          ">
          L'
          </div>
          <h1 className=" flex text-black ">LabTube{`..`} 
            <span className="text-red-700 " >Youtube</span>{`..`}Downloader
          </h1>
        </div>

        <div className="text-center flex gap-5 mb-20 w-[50%] ">
          <input type="text" placeholder="Enter url" value={urlValue}
                  onChange={(e) => setUrlValue(e.target.value)}
                  className=" user-input py-2 px-3 text-white font-bold rounded bg-transparent 
                      outline outline-none border border-bottom-gray-300 w-4/6
                      placeholder:text-white
                      
            "
          />
          <button className="rounded-md  px-5 py-2 active:bg-black w-2/6
                      bg-white text-black text-center active:text-white
                        hover:bg-gray-300 hover:text-red-700
                      "
                  onClick={handleDownload}
          >
            download
          </button>
          
                      
        </div>
        <div className="mx-auto">
          {data !== null ? (
            <div>
              <div className="my-4 flex items-center justify-center">
                <iframe
                  width="570"
                  height="320"
                  src={`${data['data']['url']}`}
                  title="video"
                />
              </div>
              <div className="grid grid-cols-6 gap-9 my-20">
                {data?.['data'].info.map((formatName: any, index: any) => (
                  <div key={index}>
                    <VidCard formatName={formatName} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className=" text-red-700 font-bold mt-10">No download yet</div>
          )}
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center
            justify-start h-full w-full pt-9 ">
        <div className="text-center font-montserrat text-20 mb-9 flex 
          items-center justify-center gap-4 ">
            <div className="text-center w-14 h-14 bg-black rounded-full text-white
                      flex items-center justify-center font-bold text-3xl
            ">
            L'
            </div>
          <h1 className=" flex text-black  text-xl font-bold">LabTube{`..`} 
            <span className="text-red-700 " >Youtube</span> {`..`}Downloader
          </h1>
        </div>

        <div className="text-center flex gap-1 mb-9 w-full ">
          <input type="text" placeholder="Enter url" value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                className="user-input py-2 px-3 text-white font-bold rounded bg-transparent 
                      outline outline-none border border-bottom-gray-300
                      w-4/6 placeholder:text-white
                      
            "
          />
          <button className="rounded-md px-1 py-2 active:bg-black w-2/6 text-[85%]
                      bg-white text-black text-center active:text-white
                      hover:bg-gray-300 hover:text-red-700
                      "
                  onClick={handleDownload}
          >
            download
          </button>            
        </div>
        <div className="mx-auto">
          {data !== null ? (
            <div>
              <div className="my-4 flex items-center justify-center">
                <iframe
                  width="228"
                  height="129"
                  src={`${data['data']['url']}`}
                  title="video"
                />
              </div>
              <div className="grid grid-cols-2 gap-9 my-20">
                {data?.['data'].info.map((formatName: any, index: any) => (
                  <div key={index}>
                    <VidCard formatName={formatName} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className=" text-red-700 font-bold mt-10">No download yet</div>
          )}
        </div>          
      </div>
    )}
       
        
    </section>
  )
}

export default Home