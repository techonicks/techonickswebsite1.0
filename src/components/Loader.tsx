"use client";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const quotes = [
      "Technology, like art, is a soaring exercise of the human imagination",
      "The technology you use impresses no one. The experience you create with it is everything",
      "Innovation is the outcome of a habit, not a random act",
      "The best way to predict the future is to invent it",
      "Technology is best when it brings people together",
      "Your job is not to push pixels, it’s to solve problems",
      "The real problem is not whether machines think but whether men do",
    ];
    let random = Math.floor(Math.random() * 6);
    //   return quotes[random]
    setQuote(quotes[random]);
  }, []);
  return (
    <div className="absolute top-0 h-screen w-screen bg-black flex flex-col gap-10 px-8 md:px-20 justify-center items-center z-40">
      <Triangle
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="div"
      />
      <span className="text-center text-xl">{quote}</span>
    </div>
  );
};

export default Loader;
