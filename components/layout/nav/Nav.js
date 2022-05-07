import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import propTypes from "prop-types";
import { useWeb3React } from "@web3-react/core";

import style from "./Nav.module.css";

const Nav = ({ modal }) => {
  const { deactivate, active } = useWeb3React();
  const router = useRouter();

  const handleConnect = (e) => {
    modal(true);
    e.preventDefault();
  };

  const handleDisconnect = (e) => {
    modal(false);
    deactivate();
    e.preventDefault();
  };

  return (
    <nav className={style.navbar}>
      <ul>
        {!active && (
          <button onClick={(e) => handleConnect(e)} className={style.connect}>
            CONNECT WALLET
          </button>
        )}
        {active && (
          <Link href="/" passHref>
            <button className={style.disconnect} onClick={handleDisconnect}>
              DISCONNECT WALLET
            </button>
          </Link>
        )}
        <Link href="/" passHref>
          <button
            className={
              router.pathname === "/" ? style.activeFocus : style.active
            }
          >
            Home {router.pathname === "/" && "👈"}
          </button>
        </Link>
        <Link href="/pilots" passHref>
          <button
            className={
              router.pathname === "/pilots" ? style.activeFocus : style.active
            }
          >
            Pilots {router.pathname === "/pilots" && "👈"}
          </button>
        </Link>
        <Link href="/hanger" passHref>
          <button
            className={
              router.pathname === "/hanger" ? style.activeFocus : style.active
            }
          >
            The Hanger {router.pathname === "/hanger" && "👈"}
          </button>
        </Link>
        <Link href="/map" passHref>
          <button
            className={
              router.pathname === "/map" ? style.activeFocus : style.active
            }
          >
            The Map {router.pathname === "/map" && "👈"}
          </button>
        </Link>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  modal: propTypes.func,
};

export default Nav;
