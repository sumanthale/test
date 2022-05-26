import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Pulse from "react-reveal/Pulse";

const data = [
  {
    id: 1,
    question: "WHEN IS THE MINT DATE?",
    answer: "TBD",
  },
  {
    id: 2,
    question: "WHAT IS THE MINT PRICE?",
    answer: `Whitelist - 2 SOL , Public Mint -  2.5 SOL`,
  },
  {
    id: 3,
    question: "WHAT IS THE DIFFERENTIATOR OF OTHER SOLANA GAMBLING GAMES NFT?",
    answer:
      "We will launch 10+ games on our platform, starting with 2 games that are already live. We are constantly taking feedback from our community to release new updates to the UI/UX and also add new games to our list of Game collections.",
  },
  {
    id: 4,
    question: "What type of games will be launched?",
    answer:
      "Solana Arcade Games will hold a collection of arcade games categorized into skill, Luck and Casino type games",
  },
  // {
  //   id: 5,
  //   question: "What are the benefits for holders?",
  //   answer:
  //     "NFT Holders will receive 50% of royalties from secondary sales and 3.5% out of the total flip volume. Legendary & Ultra Rare will get additional rewards for Selected Casino Games in the future.",
  // },
  // {
  //   id: 6,
  //   question: "What if the money I deposit doesn't appear in my wallet?",
  //   answer:
  //     "You can reach out to our team either in Discord(https://discord.gg/Npbt9vv5Kj) by opening a ticket or you can share the transaction details to team@solonalaughingbuddha.games. Our team will address your query and try to resolve it within 12 hrs.",
  // },
  {
    id: 7,
    question: "When the rewards will be distributed to the holders?",
    answer: "Rewards will be distributed every week on Sunday at 8:00 PM UTC.",
  },
  // {
  //   id: 8,
  //   question: "What is the use of the in-game wallet?",
  //   answer:
  //     "You can deposit SOL from your Phantom or Solfare wallet into the in-game credits. After you finish playing your game you can withdraw the balance SOL to your main wallet. This feature allows you to play the game seamlessly without any lags.",
  // },
];

const FAQ = (props) => {
  return (
    <Pulse>
      <section
        className="tf-best-seller"
        style={{
          position: "relative",
          marginTop: "60px",
          marginBottom: "20px",
        }}
      >
        <span
          id="faq"
          style={{
            position: "absolute",
            top: "-80px",
          }}
        ></span>
        <div className="best-seller-inner">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 className="text-primary mb-2">WE'VE ANSWERS</h4>
              <h3>FAQ</h3>
              <p
                className="desc"
                style={{
                  fontSize: "1rem",
                }}
              >
                Here is the answer to most of your Questions!
              </p>
              <FAQList faqs={data} />
            </div>
          </div>
        </div>
      </section>
    </Pulse>
  );
};

export default FAQ;

function FAQList({ faqs }) {
  return (
    <div className="mt-3">
      {faqs.map((faq) => (
        <Accordion
          className="bg-body mb-2 shadow"
          style={{
            borderRadius: "10px",
            boxShadow: ` 4px 4px 60px rgb(99 69 237 / 19%)`,
          }}
          key={faq.id}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5
              className="text-uppercase text-justify"
              style={{
                lineHeight: "1.1",
              }}
            >
              <i className="fad fa-lightbulb  fa-md"></i> {faq.question}
            </h5>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-justify">{faq.answer}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
