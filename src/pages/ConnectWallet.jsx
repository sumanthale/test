import React from "react";
import { Link } from "react-router-dom";
import WalletConnect from "../components/layouts/WalletConnect";

const ConnectWallet = () => {
  return (
    <div>
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">Wallet-Connect</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Wallet-connect</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WalletConnect />
    </div>
  );
};

export default ConnectWallet;
