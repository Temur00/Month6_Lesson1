import React from "react";
import "./Hero.scss";
function Hero() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="first-items">
            <p className="product">Product was Built Specifically for You</p>
            <div className="sign-cards">
              <div className="sign-card ">
                <div className="cursor">
                  <img src="cursor.png" alt="IMG" />
                </div>
                <p>First click tests</p>
                <p>While most people enjoy casino gambling,</p>
              </div>
              <div className="sign-card second">
                <div className="cursor">
                  <img src="d-survey.png" alt="IMG" />
                </div>
                <p>Design surveys</p>
                <p>Sports betting, lottery and bingo playing for the fun</p>
              </div>
              <div className="sign-card third">
                <div className="cursor">
                  <img src="heart.png" alt="IMG" />
                </div>
                <p>Preference tests</p>
                <p>The Myspace page defines the individual.</p>
              </div>
              <div className="sign-card fourth">
                <div className="cursor">
                  <img src="timing.png" alt="IMG" />
                </div>
                <p>Five second tests</p>
                <p>
                  Personal choices and the overall personality of the person.{" "}
                </p>
              </div>
            </div>
            <button>SIGN UP NOW</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="second-items">
            <p className="strategy">Contents Strategies</p>
            <p className="focus">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.{" "}
            </p>
            <div className="second-cards">
              <div className="second-card">
                <img src="c-first.png" alt="Img" />
                <p>By Wahid Ari | 03 March 2019</p>
                <p>Increasing Prosperity With Positive Thinking</p>
              </div>
              <div className="second-card">
                <img src="c-second.png" alt="Img" />
                <p>By Wahid Ari | 03 March 2019</p>
                <p>Motivation Is The First Step To Success</p>
              </div>
              <div className="second-card">
                <img src="c-third.png" alt="Img" />
                <p>By Wahid Ari | 03 March 2019</p>
                <p>Success Steps For Your Personal Or Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
