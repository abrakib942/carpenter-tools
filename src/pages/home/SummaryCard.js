import React, { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const SummaryCard = ({ summary }) => {
  const { icon, number, text } = summary;

  const [inVisible, setInvisible] = useState(false);
  return (
    <ReactVisibilitySensor
      offset={{ top: 300 }}
      onChange={() => setInvisible(!inVisible)}
    >
      <div className="card card-compact w-52 bg-base-100 justify-center">
        <figure className="h-24 w-24 text-primary mx-auto">{icon}</figure>
        <div className="text-center">
          {inVisible ? (
            <h2 className="text-4xl font-bold text-accent">
              <CountUp start={0} end={number} duration={2} />+
            </h2>
          ) : (
            <h2 className="text-4xl font-bold text-accent">{number}+ </h2>
          )}
          <p className="text-orange-500 font-bold">{text}</p>
        </div>
      </div>
    </ReactVisibilitySensor>
  );
};

export default SummaryCard;
