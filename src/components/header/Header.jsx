import React from "react";
import "./Header.scss";
function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <div className="nav-items">
              <div className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="37"
                  viewBox="0 0 40 37"
                  fill="none"
                >
                  <path
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M3.13307 34.4586C1.40988 34.4586 1.6082e-07 33.0487 1.49105e-07 31.3255L7.4635e-08 20.3719L7.88626 20.3719L7.88626 20.3598L12.6263 20.3598C13.8482 20.3285 14.8821 19.2632 14.8821 18.01C14.8821 16.7254 13.8168 15.6602 12.5323 15.6602L6.26614 15.6602L6.26614 15.6622L4.26149e-08 15.6622L2.13006e-08 12.5271C9.58529e-09 10.8039 1.40988 9.39404 3.13307 9.39404L12.5323 9.39404C14.9134 9.39404 16.9499 10.24 18.6104 11.9318C20.3023 13.5924 21.1482 15.6289 21.1482 18.01C21.1482 20.3598 20.3336 22.3963 18.6731 24.0568C17.0126 25.7173 15.0074 26.5946 12.6576 26.6259L6.26614 26.6259L6.26614 31.3255C6.26614 33.0487 4.85626 34.4586 3.13307 34.4586Z"
                    fill="#02BC6B"
                  />
                  <path
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M25.0974 5.75781C28.5589 9.11995 30.3031 13.3073 30.3031 18.0673C30.3031 22.7473 28.6319 26.9307 25.2239 30.3034L20.3852 25.7508C22.5046 23.6533 23.545 21.128 23.545 18.0673C23.545 14.9832 22.4733 12.4619 20.303 10.3538L25.0974 5.75781Z"
                    fill="#02897A"
                  />
                  <path
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M32.5055 -3.14562e-08C37.4912 4.97781 40 11.1499 40 18.2338C40 25.2071 37.5923 31.3753 32.6885 36.3638L28.0187 31.8009C31.6715 28.085 33.4614 23.5781 33.4614 18.2338C33.4614 12.8358 31.6112 8.33276 27.8787 4.60616L32.5055 -3.14562e-08Z"
                    fill="#035B81"
                  />
                  <path
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                    d="M0 26.6523L6.26614 26.6523L6.26614 31.326C6.26614 33.0492 4.85626 34.459 3.13307 34.459C1.40988 34.459 4.34898e-08 33.0492 3.17744e-08 31.326L0 26.6523Z"
                    fill="#028E37"
                  />
                </svg>
                <p className="logo-text">Product</p>
              </div>
              <div className="nav-item">
                <a href="#product">Product</a>
                <a href="#customers">Customers</a>
                <a href="#pricing">Pricing</a>
                <a href="#resources">Resources</a>
                <button className="sign-in">Sign in</button>
                <button className="sign-in">Sign up</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="after-nav">
            <div className="h-aft-texts">
              <p>Work at the speed of thought</p>
              <p>
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </p>
              <div className="buttons">
                <button>Get started </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                  >
                    <path d="M15.6904 8.52607C16.4396 8.95923 16.4396 10.0408 15.6904 10.4739L1.76695 18.524C1.01695 18.9576 0.0788498 18.4164 0.0788498 17.5501V1.44993C0.0788498 0.583602 1.01695 0.0423758 1.76695 0.476L15.6904 8.52607Z" />
                  </svg>
                  Watch the Video
                </button>
              </div>
            </div>
            <img src="amico.png" alt="IMG" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
