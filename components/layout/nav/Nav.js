import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import propTypes from "prop-types";
import { useWeb3React } from "@web3-react/core";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

import style from "./Nav.module.css";

const Nav = ({ modal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { deactivate, active } = useWeb3React();
  const router = useRouter();

  const handleConnect = (e) => {
    setIsLoading(true);
    e.preventDefault();
  };

  const handleDisconnect = (e) => {
    modal(false);
    deactivate();
    e.preventDefault();
  };

  const handleClick = (e) => {
    setIsLoading(true);
    // e.preventDefault()
  };

  const handleRouteChange = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className={style.navbar}>
      {!active && (
        <button onClick={(e) => handleConnect(e)} className={style.connect}>
          CONNECT
        </button>
      )}
      {active && (
        <Link href="/" passHref>
          <button className={style.disconnect} onClick={handleDisconnect}>
            DISCONNECT
          </button>
        </Link>
      )}
      <Link href="/" passHref>
        <button
          className={router.pathname === "/" ? style.activeFocus : style.active}
        >
          Home
        </button>
      </Link>
      <Link href="/the-hanger" passHref>
        <button
          className={
            router.pathname === "/the-hanger" ? style.activeFocus : style.active
          }
        >
          The Hanger
        </button>
      </Link>
      <Link href="/pilots" passHref>
        <button
          className={
            router.pathname === "/pilots" ? style.activeFocus : style.active
          }
        >
          Pilots
        </button>
      </Link>
      <Link href="/map" passHref>
        <button
          className={
            router.pathname === "/map" ? style.activeFocus : style.active
          }
        >
          Map
        </button>
      </Link>
      <Link href="/prices" passHref>
        <button
          className={
            router.pathname === "/prices" ? style.activeFocus : style.active
          }
          onClick={handleClick}
        >
          {isLoading ? <LoadingSpinner /> : "Prices"}
        </button>
      </Link>
    </nav>
  );
};

Nav.propTypes = {
  modal: propTypes.func,
};

export default Nav;
