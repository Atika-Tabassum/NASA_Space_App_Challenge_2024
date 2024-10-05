import React from "react";
import Header from "../general/Header";
import "./awareness.css";
import { Fragment } from "react";

const Awareness = () => {
  const allAwarness = [
    {
      id: 1,
      title: "Climate Change",
      content:
        "Climate change is a global issue that affects everyone, regardless",
      whatcanwedo:
        "We can reduce our carbon footprint by using less energy, driving less, and eating less meat.",
    },
    {
      id: 2,
      title: "Global Warming",
      content:
        "Global warming is the long-term heating of Earth’s climate system",
      whatcanwedo:
        "We can reduce our carbon footprint by using less energy, driving less, and eating less meat.",
    },
    {
      id: 3,
      title: "Deforestation",
      content: "Deforestation is the permanent removal of standing forests.",
      whatcanwedo:
        "We can reduce our carbon footprint by using less energy, driving less, and eating less meat.",
    },
    {
      id: 4,
      title: "Pollution",
      content:
        "Pollution is the introduction of harmful materials into the environment.",
      whatcanwedo:
        "We can reduce our carbon footprint by using less energy, driving less, and eating less meat.",
    },
  ];

  return (
    <Fragment>
      <Header />
      <div className="awareness">
        <div className="awareness__content">
          <h1>RAISING AWARENESS</h1>
          <div className="awareness__content--container">
            {allAwarness.map((awareness) => (
              <div className="awareness__content--card" key={awareness.id}>
                <h2>{awareness.title}</h2>
                <p>{awareness.content}</p>
                <h3>What can we do?</h3>
                <p>{awareness.whatcanwedo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Awareness;
