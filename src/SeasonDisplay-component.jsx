import React from "react";
import "./season-display.css";

const seasonConfig = {
  summer: {
    text: "lets hit the bitch",
    iconName: "sun",
  },
  winter: {
    text: "brrr, its cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`left massive ${iconName} icon`} />
      <h1 className="text">{text}</h1>
      <i className={`right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
