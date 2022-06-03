import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const list = [
  {
    id: 1,
    title: "This was Dr Ashfaque Ahmed who came to Australia in ...",
    text: " This was Dr Ashfaque Ahmed who came to Australia in 1962 in Sydney and then moved to Adelaide to work in The Royal Adelaide hospital in 1965, decided to start a.",
  },
  {
    id: 2,
    title: "This was Dr Ashfaque Ahmed who came to Australia in ...",
    text: " This was Dr Ashfaque Ahmed who came to Australia in 1962 in Sydney and then moved to Adelaide to work in The Royal Adelaide hospital in 1965, decided to start a.",
  },
  {
    id: 3,
    title: "This was Dr Ashfaque Ahmed who came to Australia in ...",
    text: " This was Dr Ashfaque Ahmed who came to Australia in 1962 in Sydney and then moved to Adelaide to work in The Royal Adelaide hospital in 1965, decided to start a.",
  },
  {
    id: 4,
    title: "This was Dr Ashfaque Ahmed who came to Australia in ...",
    text: " This was Dr Ashfaque Ahmed who came to Australia in 1962 in Sydney and then moved to Adelaide to work in The Royal Adelaide hospital in 1965, decided to start a.",
  },
  {
    id: 5,
    title: "This was Dr Ashfaque Ahmed who came to Australia in ...",
    text: " This was Dr Ashfaque Ahmed who came to Australia in 1962 in Sydney and then moved to Adelaide to work in The Royal Adelaide hospital in 1965, decided to start a.",
  },
  {
    id: 6,
    title: "This was Dr Ashfaque Ahmed who came to Australia in ...",
    text: " This was Dr Ashfaque Ahmed who came to Australia in 1962 in Sydney and then moved to Adelaide to work in The Royal Adelaide hospital in 1965, decided to start a.",
  },
];

const StrategicObjective = () => {
  const [CurrIndex, setCurrIndex] = useState("0");
  return (
    <>
      <section>
        <div className="container-lg">
          <div className="wt-bnr-inr m-t60">
            <div className="home-title-name p-tb10">
              <h1 className="wt-title"> Strategic Objectives</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="strt-list">
                {list.map((value, index) => {
                  return (
                    <div
                      className={
                        value.id === CurrIndex
                          ? "list-body color-body"
                          : " list-body "
                      }
                      key={index}
                      onClick={() => {
                        if (CurrIndex === value.id) return setCurrIndex("");

                        setCurrIndex(value.id);
                      }}
                    >
                      <div className="list-heading">
                        {value.id === CurrIndex ? (
                          <>
                            <p className="list-text">{value.text} </p>
                          </>
                        ) : (
                          <>
                            <p className="list-title">{value.title}</p>{" "}
                          </>
                        )}
                        <KeyboardArrowDownRoundedIcon />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-img">
                <img src="./home/StrategicObjectives.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StrategicObjective;
