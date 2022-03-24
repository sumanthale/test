import React from "react";
import Tada from "react-reveal/Tada";

export const Newsletters = () => {
  return (
    <Tada>
      <section className="new-letter">
        <div className="container">
          <div className="new-letter-inner style-2">
            <div
              className="bg-body p-4  mx-auto"
              style={{
                borderRadius: "30px",
              }}
            >
              <div className="text-center mb-4">
                <h2 className="heading mb-2">JOIN OUR COMMUNITY</h2>
                <p className="sub-heading h6">
                  GET INSTANT UPDATES FROM YOUR LAUGHING BUDDHA
                </p>
              </div>
              <div className="d-flex justify-content-center ">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="sc-button style letter style-2 mr-4"
                >
                  <span>Twitter</span>{" "}
                </button>
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="ml-4 sc-button style letter style-2"
                >
                  <span>Discord</span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Tada>
  );
};
