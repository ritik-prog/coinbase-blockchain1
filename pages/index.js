import react from "react";
import Head from "next/head";
import styled from "styled-components";
import { useWeb3 } from "@3rdweb/hooks";
import Dashboard from "./Dashboard";

export default function Home() {
  const { address, connectWallet } = useWeb3();
  return (
    <div className="Wrapper">
      {address ? (
        <Dashboard address={address} />
      ) : (
        <div className="WalletConnect">
          <button className="Button" onClick={() => connectWallet("injected")}>
            CONNECT WALLET
          </button>
          <div className="Details">
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
      <style jsx>{`
        .Wrapper {
          display: flex;
          height: 100vh;
          max-width: 100vw;
          background-color: #0a0b0d;
          color: white;
          display: grid;
          align-items: center; 
        }
        .WalletConnect {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .Button {
          border: 1px solid #282b2f;
          padding: 0.8rem;
          font-size: 1.3rem;
          font-weight: 500;
          border-radius: 0.4rem;
          background-color: #3773f5;
          color: #000;
        }
        .Button:hover {
          cursor: pointer;
        }
        .Details {
          font-size: 1.2rem;
          text-align: center;
          margin-top: 1rem;
          font-weight: 500;
          color: #282b2f;
        }
      `}</style>
    </div>
  );
}
