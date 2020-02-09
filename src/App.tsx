import * as React from "react";

import ControlPanel from "./components/ControlPanel";
import MoreInfo from "./components/MoreInfo";
import AssetList from "./components/assets/AssetList";
import AccountList from "./components/accounts/AccountList";
import SuggestedAllocationList from "./components/suggestedAllocation/SuggestedAllocationList";
import SuggestedTrades from "./components/SuggestedTrades";

class App extends React.Component<{}> {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1>Rebalance Calc v2</h1>
            <div className="lead">A Portfolio Rebalancing Calculator</div>
          </div>
        </div>
        <ControlPanel />
        <MoreInfo />
        <AssetList />
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <hr />
          </div>
        </div>
        <AccountList />
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <hr />
          </div>
        </div>
        <SuggestedAllocationList />
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <hr />
          </div>
        </div>
        <SuggestedTrades />
        <div className="row">
          <div className="col-lg-6 offset-lg-3" style={{textAlign: "center"}}>
            <hr />
            <div className="row">
              <div className="col-lg-5">
                Created by: <a href="https://www.chrisjeakle.com">Chris Jeakle</a>
              </div>
              <div className="col-lg-2">
                |
              </div>
              <div className="col-lg-5">
                <a href="https://github.com/cjjeakle/rebalance-calc">View project source</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
