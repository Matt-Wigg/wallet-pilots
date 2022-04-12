import { useState, useEffect } from "react";
const words = [
  "a web3 project by SoftwareGuy.eth ",
  "a connection to the blockchain ",
  "your new favorite app :) ",
  "a way to send digital currency ",
  "the company private key is ",
  "oops... nearly! ",
  "a way to manage your NFTs ",
  "your digital asset portfolio manager ",
];

import style from "../styles/Typing.module.css";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }
    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setTimeout(setReverse, 3000, true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 200 : 150, parseInt(Math.random() * 150)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1>
        <span className={style.walletPilot}>Wallet Pilot: </span>
        <span className={style.typeWriter}>
          {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </span>
      </h1>
    </>
  );
}
