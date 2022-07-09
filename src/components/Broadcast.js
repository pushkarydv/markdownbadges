import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Broadcast() {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    axios
      .get("https://broadcasts-pushkaryadav.netlify.app/api/broadcast")
      .then((res) => {
        if (res.data.title) {
          setApiData({
            text: res.data.title,
            link: res.data.link,
          });
          setTimeout(() => {
            setApiData(null);
          }, 10000);
        }
      });
  }, []);
  return (
    <>
      {apiData && (
        <div className="transition-all h-8">
          <div className="transition-all ease-in-out flex justify-center items-center bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 absolute w-full h-8 top-0 left-0 text-white text-xs sm:text-sm md:text-base hover:saturate-150">
            <a href={apiData.link} target="_blank" rel="noopener noreferrer">
              {apiData.text}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
