import React from "react";
import "./Styles/App.scss";
import Video from "./Components/Video";

function App() {
  return (
    <div className="app">
      <p>tik-lok</p>
      {/* container */}
      <div className="app_videos">
        <Video />
        <Video />
      </div>

      {/* video */}
    </div>
  );
}

export default App;
