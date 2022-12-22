import { InfoRounded, Widgets } from "@mui/icons-material";
import React from "react";
import "./widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widget-head">
        <h2>
          Linked-In News
          <Widgets htmlColor="#689BF7" className="icon" />
        </h2>
        <br />
        <hr />
        <div className="news">
          <h4 className="news_head">
            <InfoRounded className="icons" htmlColor="#689BF7" />
            Covid cases on a rise again
          </h4>

          <h4 className="news_head">
            <InfoRounded className="icons" htmlColor="#689BF7" />
            India to host G20 summit inauguration ceremony in Mumbai
          </h4>

          <h4 className="news_head">
            <InfoRounded className="icons" htmlColor="#689BF7" />
            Argenta wins the Fifa world cup 2022
          </h4>

          <h4 className="news_head">
            <InfoRounded className="icons" htmlColor="#689BF7" />
            In Washington, Zelensky pledges ‘no compromises’ in trying to end
            Russia's war
          </h4>
          <h4 className="news_head">
            <InfoRounded className="icons" htmlColor="#689BF7" />
            Covid Surge Rampages Through Shanghai Virtually Unchecked.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Widget;
