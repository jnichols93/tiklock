import React from "react";
import "../Styles/Video.scss";

function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        src="https://www.youtube.com/watch?v=Mel3cxThamo"
      ></video>
      {/* footer */}
      {/* video sidebar */}
    </div>
  );
}

export default Video;
