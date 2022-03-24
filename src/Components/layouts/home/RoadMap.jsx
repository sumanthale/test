import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Bounce from "react-reveal/Bounce";

const LiveAution = (props) => {
  return (
    <section className="tf-live-auctions tf-section bg-color-1">
      <div className="container">
        <div className="row">
          <Bounce right>
            <div className="col-md-12">
              <div className="sc-heading style-2 has-icon">
                <div className="content-left w-75">
                  <div className="inner">
                    <div className="group">
                      <i className=" fad fa-road fa-3x mr-2"></i>
                      <h3>ROADMAP</h3>
                    </div>
                    <p className="desc">
                      Watch this space for more new updates. We are continually
                      improving our current offerings and the roadmap based on
                      our community feedback and the market trends.
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
          <h3 className="font-weight-normal">June 15, 2022</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <i className="fad fa-camera-retro fa-lg p-1"></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h5>PHASE 1 - MVP DEVELOPMENT</h5>
          <p
            className="text-justify mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            blanditiis quasi ut doloribus dolorem at! At suscipit tenetur
            soluta, exercitationem quo numquam nobis quod id, voluptatem
            consequatur, minus voluptas aut? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos dolore labore, incidunt enim sint
            aliquid architecto non ex molestiae id?
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          <h3 className="font-weight-normal">May 15, 2022</h3>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <i className="fad fa-building  fa-lg p-1"></i>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <h5>PHASE 2 - MVP DEPLOYMENT</h5>
          <p
            className="text-justify mt-2"
            style={{
              lineHeight: "1.5rem",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            blanditiis quasi ut doloribus dolorem at! At suscipit tenetur
            soluta, exercitationem quo numquam nobis quod id, voluptatem
            consequatur, minus voluptas aut? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quos dolore labore, incidunt enim sint
            aliquid architecto non ex molestiae id?
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
