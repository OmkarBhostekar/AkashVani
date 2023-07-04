import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faExclamationCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex w-screen justify-between p-[20px]">
      <div className="flex items-center">
        <img
          src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_2x_icon_124_40_292e71bcb52a56e2a9005164118f183b.png"
          alt=""
          className="h-100 w-[124px]"
        />
        <span className="text-[22px] pl-2 pb-1 text-[#5f6368]">Meet</span>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="text-lg p-2 text-[#dadce0] cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-lg p-2 text-[#dadce0] cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faCog}
          className="text-lg p-2 text-[#dadce0] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
