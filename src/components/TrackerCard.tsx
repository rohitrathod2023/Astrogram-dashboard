import React from "react";
import FigmaIcon from "../assets/figma.svg";
import SlackIcon from "../assets/slack.svg";
import TrelloIcon from "../assets/trello.svg";
const TrackerCard = () => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md w-96">
      <div>
        <h3 className="text-base font-bold">Trackers connected</h3>
        <p className="text-sm text-gray-500">3 active connections</p>
      </div>

      <div className="flex items-center space-x-2">
        <div className="bg-white p-1 rounded-full shadow-md">
          <img src={FigmaIcon} alt="Trello" className="w-6 h-6" />
        </div>
        <div className="bg-white p-1 rounded-full shadow-md">
          <img src={TrelloIcon} alt="Figma" className="w-6 h-6" />
        </div>
        <div className="bg-white p-1 rounded-full shadow-md">
          <img src={SlackIcon} alt="Slack" className="w-6 h-6" />
        </div>
        <div className="bg-white p-2 rounded-full shadow-md flex items-center justify-center">
          <span className="text-lg font-bold">...</span>
        </div>
      </div>
    </div>
  );
};

export default TrackerCard;
