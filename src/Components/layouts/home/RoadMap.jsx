import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Bounce from "react-reveal/Bounce";
import TimelineIcon from "@mui/icons-material/Timeline";
const LiveAution = (props) => {
  return (
    <section
      className="tf-live-auctions tf-section bg-color-1 roadmap-section"
      style={{
        position: "relative",
      }}
    >
      <span
        id="roadmap"
        style={{
          position: "absolute",
          top: "-80px",
        }}
      ></span>
      <div className="container">
        <div className="row">
          <Bounce right>
            <div className="col-md-12">
              <div className="sc-heading style-2 has-icon">
                <div className="content-left w-100">
                  <div className="inner">
                    <div className="group">
                      <i className=" fad fa-road fa-3x mr-2"></i>
                      <h2>ROADMAP</h2>
                    </div>
                    <p
                      className="desc mt-3"
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      Watch this space for more new updates. We are continuously
                      improving our current offerings and the roadmap based on
                      our community feedback and market trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Bounce>
          <Bounce left>
            <div className="col-md-12 my-5">
              <CustomizedTimeline />
            </div>
          </Bounce>
        </div>
      </div>
    </section>
  );
};

export default LiveAution;

function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <h3 className="timeline-head font-font font-weight-normal">
            Jan, 2022 - April, 2022
          </h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <i className="fad fa-timeline fa-lg p-1"></i> */}
            <TimelineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h4 className="text-primary font-font">🚀 PHASE 0 (Completed)</h4>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹 Birth of NFT plan
          </p>
          <p
            className="font-font my-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹 NFT Art Illustration
          </p>
          <h4 sx={{}} className="text-primary font-font">
            🚀 PHASE 1
          </h4>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹 Setting up the Elves of Elysium Discord server
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹 Setting up our social media presence on Twitter and instagram
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹 Setting up the website
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹 Building the Solana based lottery system
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          <h3 className="timeline-head font-font font-weight-normal">
            April 2022 - June 2022
          </h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <i className="fad fa-building  fa-lg p-1"></i> */}
            <TimelineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h4 sx={{}} className="text-primary font-font">
            🚀 PHASE 2 - MVP
          </h4>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Initiation of Chapter One of the Elves of Elysium
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Website is operational
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Release of an updated Whitepaper
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Up to 6 Arcade P2E(Play to Earn) Arcade games
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Completion of 2222 NFT Artworks
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          <h3 className="timeline-head font-font font-weight-normal">
            June 3, 2022
          </h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <i className="fad fa-building  fa-lg p-1"></i> */}
            <TimelineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h4 sx={{}} className="text-primary font-font">
            🚀 PHASE 3 - Launch
          </h4>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Preparation for Mint
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹ME Listing is done
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Surprise $SOL Raffles for all holders
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          <h3 className="timeline-head font-font font-weight-normal">
            June, 2022 - July, 2022
          </h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <i className="fad fa-building  fa-lg p-1"></i> */}
            <TimelineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h4 sx={{}} className="text-primary font-font">
            🚀 PHASE 4 - Growth
          </h4>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹The Verification bot and the sales bot are operational.
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Setup of alpha groups
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Weekly rewards for holders
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Surprise rewards for staked/unlisted holders
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹The staking system is introduced for long-term holders
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          <h3 className="timeline-head font-font font-weight-normal">
            August, 2022 - Beyond
          </h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            {/* <i className="fad fa-building  fa-lg p-1"></i> */}
            <TimelineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h4 sx={{}} className="text-primary font-font">
            🚀 PHASE 5 - The Beginning{" "}
          </h4>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Initiation of the second chapter of Elves of Elysium
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Completion of 50+ P2E Arcade games by the end of 2022
          </p>
          <p
            className="font-font mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            🔹Progressive increase in revenue stream for holders
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
